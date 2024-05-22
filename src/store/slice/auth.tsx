import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { loginAsync } from "../async/auth";
import { IProfile } from "../../types/app";

interface IAuthState {
    token: string;
    loading: boolean;
    errorMessage: string;
    user: IProfile | null | undefined;
}

const initialState: IAuthState = {
    token: "",
    loading: false,
    errorMessage: "",
    user: undefined
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_LOGIN: ( state, action: PayloadAction<{ user: IProfile, token: string }> ) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        SET_LOGOUT: (state) => {
            localStorage.removeItem("token");
            state.token = "";
        }
    },
    extraReducers: (builder) => {
        // login
        builder.addCase(loginAsync.pending, (state) => {
            state.token = "";
            state.loading = true;
        });
        builder.addCase(loginAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload.token;
        });
        builder.addCase(loginAsync.rejected, (state, action) => {
            state.loading = false;
            state.token = "";
            state.errorMessage = action.payload as string;
        });
    }
});

export const { SET_LOGIN, SET_LOGOUT } = authSlice.actions;
export default authSlice.reducer;