import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/app";
import { productAsync } from "../async/product";

interface IInitialState {
    products: IProduct[]
    loading: boolean;
    errorMessage: string;
}

const initialState: IInitialState = {
    products: [],
    loading: false,
    errorMessage: ""
}
export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {}, 
    extraReducers: (builder) => {
        builder.addCase(productAsync.pending, (state) => {
            state.loading = true;
            state.products = [];
        });
        builder.addCase(productAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })
        
    }
})