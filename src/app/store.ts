import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { complexesApi } from "@/features/complexes/api/complexes.api";
import { flatsApi } from "@/features/flats/api/flats.api";
import { flatsViewSlice } from "@/features/flats/model/reducer";
import { langSlice } from "../entities/lang/model/reducer";
import { homeBannersApi } from "../pages/client/home/api/banners.api";

export const store = configureStore({
    reducer: {
        languages: langSlice.reducer,
        view: flatsViewSlice.reducer,
        [homeBannersApi.reducerPath]: homeBannersApi.reducer,
        [complexesApi.reducerPath]: complexesApi.reducer,
        [flatsApi.reducerPath]: flatsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([homeBannersApi.middleware, complexesApi.middleware, flatsApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
