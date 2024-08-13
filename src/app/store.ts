import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { langSlice } from "../entities/lang/model/reducer";

export const store = configureStore({
    reducer: {
        languages: langSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
