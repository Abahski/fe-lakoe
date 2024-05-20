import { createSlice } from "@reduxjs/toolkit";
import { IOrder } from "../../types/app";
import { getOrderAsync } from "../async/order";

interface IInitialState {
  orders: IOrder[];
  loading: boolean;
  errorMessage: string;
}

const initialState: IInitialState = {
  orders: [],
  loading: false,
  errorMessage: "",
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrderAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOrderAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    });
    builder.addCase(getOrderAsync.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = action.error.message as string;
    });
  },
});

export default orderSlice.reducer;
