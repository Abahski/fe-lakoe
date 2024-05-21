import { createAsyncThunk } from "@reduxjs/toolkit";
import { getStore } from "../../lib/api/call/store";

export const getStoreAsync = createAsyncThunk(
  "store/getStoreAsync",
  async (_, thunkApi) => {
    try {
      const res = await getStore();
      return res.data;
    } catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue((error as Error).message);
    }
  }
);
