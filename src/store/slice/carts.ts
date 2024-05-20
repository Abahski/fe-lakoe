import { createSlice } from "@reduxjs/toolkit";
import { getCartsAsync } from "../async/carts";
import { ICarts } from "../../types/app";

interface IInitialState {
  carts: ICarts[];
  loading: boolean;
  errorMessage: string;
}

const initialState: IInitialState = {
  carts: [],
  loading: false,
  errorMessage: "",
};

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCartsAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCartsAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.carts = action.payload;
    });
    builder.addCase(getCartsAsync.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = action.error.message as string;
    });
  },
});

export default cartSlice.reducer;
