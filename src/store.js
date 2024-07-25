import { configureStore } from "@reduxjs/toolkit";
import dessertsReducer from "./features/dessertSlice";

export const store = configureStore({
  reducer: {
    orders: dessertsReducer,
  },
});
