import { createSlice } from "@reduxjs/toolkit";
import { getUserAsync } from "../async/user";
import { IUser } from "../../types/app";
import { RootState } from "..";

interface IUserState {
  user: IUser | null | undefined;
  loading: boolean;
  token: string;
  errorMessage: string;
}

const initialState: IUserState = {
  token: "",
  user: undefined,
  loading: false,
  errorMessage: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserAsync.pending, (state) => {
      state.user = undefined;
      state.loading = true;
    });

    builder.addCase(getUserAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });

    builder.addCase(getUserAsync.rejected, (state, action) => {
      state.loading = false;
      state.user = undefined;
      state.errorMessage = action.payload as string;
    });
  },
});

export const selectUsers = (state: RootState) => state.user;

export default userSlice.reducer;
