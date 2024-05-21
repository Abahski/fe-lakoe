import { createSlice } from "@reduxjs/toolkit";
import { ICourier } from "../../types/app";
import { getCouriersAsync } from "../async/courier";

interface IInitialState {
  couriers: ICourier;
  loading: boolean;
  errorMessage: string;
}

const initialState: IInitialState = {
  couriers: {
    courier_code: "",
    courier_service_name: "",
    courier_service_code: "",
    price: 0,
  },
  loading: false,
  errorMessage: "",
};

export const courierSlice = createSlice({
  name: "courier",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCouriersAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCouriersAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.couriers = action.payload;
    });
    builder.addCase(getCouriersAsync.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default courierSlice.reducer;
