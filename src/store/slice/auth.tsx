import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { loginAsync } from "../async/auth";
import { IUser } from "../../types/app";

interface IAuthState {
    token: string;
    loading: boolean;
    errorMessage: string;
}

const initialState: IAuthState = {
    token: "",
    loading: false,
    errorMessage: ""
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_LOGIN: (
            state,
            action: PayloadAction<{ user: IUser, token: string }>
        ) => {
            state.token = action.payload.token;
        },
        SET_LOGOUT: (state) => {
            localStorage.removeItem("token");
            state.token = "";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginAsync.pending, (state) => {
            state.loading = true;
            state.token = "";
        });
        builder.addCase(loginAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload;
        });
        builder.addCase(loginAsync.rejected, (state, action) => {
            state.loading = false;
            state.errorMessage = action.error.message as string;
            state.token = "";
        });
    }
});

export const { SET_LOGIN, SET_LOGOUT } = authSlice.actions;
export default authSlice.reducer;
