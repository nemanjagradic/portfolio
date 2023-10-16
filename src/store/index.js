import { configureStore } from "@reduxjs/toolkit";
import linkSlice from "./links-slice";

const store = configureStore({
  reducer: linkSlice.reducer,
});

export default store;
