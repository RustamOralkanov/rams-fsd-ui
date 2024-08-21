import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { langSlice } from "../entities/lang/model/reducer";
import { homeBannersApi } from "../pages/client/home/api/banners.api";

export const store = configureStore({
    reducer: {
        languages: langSlice.reducer,
        [homeBannersApi.reducerPath]: homeBannersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([homeBannersApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
