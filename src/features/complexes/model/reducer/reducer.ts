import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComplexParams } from "../types/complex";

const initialState: ComplexParams = {};

export const complexFilter = createSlice({
    name: "complexFilter",
    initialState,
    reducers: {
        setComplexFilter: (state, action: PayloadAction<ComplexParams>) => {
            return { ...state, ...action.payload };
        },
        resetComplexFilter: () => initialState,
    },
});

export const { setComplexFilter, resetComplexFilter } = complexFilter.actions;
export default complexFilter.reducer;
