import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import authReducer from "./slice/auth";
import order from "./slice/order";
import carts from "./slice/carts";
import stores from "./slice/store";
import courier from "./slice/courier";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    order: order,
    carts: carts,
    stores: stores,
    courier: courier,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
