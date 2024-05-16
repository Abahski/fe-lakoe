import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../../lib/api/call/auth";
import { SET_LOGIN } from "../slice/auth";
export const loginAsync = createAsyncThunk(
    "auth/login",
    async (body: { email: string, password: string }, thunkApi) => {
        try {
            const res = await loginApi(body);
            const token = res.data.token;
            localStorage.setItem("token", token);

            thunkApi.dispatch(SET_LOGIN({ token: res.data.token }))

            return token
        } catch (error) {
            const err = error as unknown as Error
            console.log(err)

            thunkApi.rejectWithValue(err)
        }
    }
)