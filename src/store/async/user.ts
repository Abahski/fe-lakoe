import { createAsyncThunk } from "@reduxjs/toolkit";
import { users } from "../../lib/api/call/user";

export const getUserAsync = createAsyncThunk("auth/users", async () => {
  try {
    const { data } = await users();
    return data;
  } catch (error) {
    console.log(error);
  }
});
