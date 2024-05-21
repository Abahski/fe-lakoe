import { createAsyncThunk } from "@reduxjs/toolkit";
import { getInvoice } from "../../lib/api/call/order";

export const getOrderAsync = createAsyncThunk(
  "order/getOrderAsync",
  async (_, thunkApi) => {
    try {
      const res = await getInvoice();
      return res.data;
    } catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue((error as Error).message);
    }
  }
);
