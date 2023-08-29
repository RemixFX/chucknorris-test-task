import { configureStore } from "@reduxjs/toolkit";
import { cardSlice } from "./reducers/cardSlice";

export const store = configureStore({
  reducer: {
    card: cardSlice.reducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;