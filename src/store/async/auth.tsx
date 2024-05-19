import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../../lib/api/call/login";
import { SET_LOGIN } from "../slice/auth";

export const loginAsync = createAsyncThunk(
    "auth/login",
    async (body: { email: string, password: string }, thunkApi) => {
        try {
            const res = await loginApi(body);
            const token = res.data.token;
            localStorage.setItem("token", token);
            thunkApi.dispatch(SET_LOGIN({ user: res.data, token }));
            return token;
        } catch (error) {
            console.error(error);
            return thunkApi.rejectWithValue((error as Error).message);
        }
    }
);
