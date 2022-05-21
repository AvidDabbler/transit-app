import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./appSlice";

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    // [transitNodeApi.reducerPath]: transitNodeApi.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(transitNodeApi.middleware),
});

const appActions = appSlice.actions;

export { appSlice, appActions };
