
import { baseApi,frontendApi,backendApi } from "@/components/Redux/api/baseApi";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import counterSlice from "@/components/Redux/features/AllSlice/counterSlice"
import authSlice from "@/components/Redux/features/AllSlice/authSlice"
import checkoutSlice from "@/components/Redux/features/AllSlice/checkoutSlice"

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer, 
    counter: counterSlice,
    auth: authSlice,
    checkout: checkoutSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware), 
});

setupListeners(store.dispatch); 
