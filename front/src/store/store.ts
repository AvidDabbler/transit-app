import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./appSlice";

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

const appActions = appSlice.actions;

export { appSlice, appActions };
