import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCart } from "../../lib/api/call/carts";

export const getCartsAsync = createAsyncThunk(
  "carts/getCartsAsync",
  async (_, thunkApi) => {
    try {
      const res = await getCart();
      return res.data.data;
    } catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue((error as Error).message);
    }
  }
);
