import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { homeBannersApi } from "@/pages/client/home/api/banners.api";
import { paymentsApi } from "@/pages/client/payments/api/payments.api";
import { complexesApi } from "@/features/complexes/api/complexes.api";
import { favoritesSlice } from "@/features/favorite/model/reducer";
import { flatsApi } from "@/features/flats/api/flats.api";
import { flatsViewSlice } from "@/features/flats/model/reducer";
import { langSlice } from "@/entities/lang/model/reducer";
import { newsDiscountsApi } from "@/entities/news/api/news-discounts.api";

export const store = configureStore({
    reducer: {
        languages: langSlice.reducer,
        view: flatsViewSlice.reducer,
        favorites: favoritesSlice.reducer,
        [homeBannersApi.reducerPath]: homeBannersApi.reducer,
        [complexesApi.reducerPath]: complexesApi.reducer,
        [flatsApi.reducerPath]: flatsApi.reducer,
        [newsDiscountsApi.reducerPath]: newsDiscountsApi.reducer,
        [paymentsApi.reducerPath]: paymentsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([homeBannersApi.middleware, complexesApi.middleware, flatsApi.middleware, newsDiscountsApi.middleware, paymentsApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
