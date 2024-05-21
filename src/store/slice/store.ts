import { createSlice } from "@reduxjs/toolkit";
import { IStore } from "../../types/app";
import { getStoreAsync } from "../async/store";

interface IInitialState {
  stores: IStore[];
  loading: boolean;
  errorMessage: string;
}

const initialState: IInitialState = {
  stores: [],
  loading: false,
  errorMessage: "",
};

export const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStoreAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getStoreAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.stores = action.payload;
    });
    builder.addCase(getStoreAsync.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = action.error.message as string;
    });
  },
});

export default storesSlice.reducer;
