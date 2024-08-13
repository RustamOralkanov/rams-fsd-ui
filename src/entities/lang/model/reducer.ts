import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LanguageOption, TLang } from "./lang.model";

export interface AppState {
    currentLang: TLang;
    options: LanguageOption[];
}

const getInitialActiveState = (lang: string | null) => {
    return lang && (lang as TLang);
};

const defaultLang: TLang = "ru";

const initialState: AppState = {
    currentLang: getInitialActiveState(localStorage.getItem("lang")) || defaultLang,
    options: [
        {
            lang: "ru",
            active: getInitialActiveState(localStorage.getItem("lang")) === "ru",
        },
        {
            lang: "kz",
            active: getInitialActiveState(localStorage.getItem("lang")) === "kz",
        },
        {
            lang: "en",
            active: getInitialActiveState(localStorage.getItem("lang")) === "en",
        },
        {
            lang: "tr",
            active: getInitialActiveState(localStorage.getItem("lang")) === "tr",
        },
    ],
};

export const langSlice = createSlice({
    name: "languages",
    initialState,
    reducers: {
        setLang: (state, action: PayloadAction<TLang>) => {
            const newLang = action.payload;

            if (state.options.some((opt) => opt.lang === newLang)) {
                state.options.forEach((opt) => {
                    opt.active = opt.lang === newLang;
                });
                state.currentLang = newLang;
                localStorage.setItem("lang", state.currentLang);
            }
        },
    },
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;
