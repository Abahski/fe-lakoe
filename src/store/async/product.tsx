import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProduct } from "../../lib/api/call/product";
import { IProduct } from "../../types/app";


export const productAsync = createAsyncThunk<IProduct[], void>(
    "product",
    async(_, thunkApi) => {
        try {
            const res = await getProduct();
            console.log(res.data.data )
            return res.data.data
        } catch (error) {
            console.error(error)
            return thunkApi.rejectWithValue((error as Error).message)
        }
    }
)