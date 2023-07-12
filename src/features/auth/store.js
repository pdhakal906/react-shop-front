import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import userReducer from './userInfo'



export const store = configureStore({
  reducer: {
    userInfo: userReducer,
    [authApi.reducerPath]: authApi.reducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware

    ]),
})