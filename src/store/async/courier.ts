import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCourier } from "../../lib/api/call/courier";

export const getCouriersAsync = createAsyncThunk(
  "courier/getCouriersAsync",
  async (_, thunkApi) => {
    try {
      const res = await getCourier();
      return res.data;
    } catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue((error as Error).message);
    }
  }
);
