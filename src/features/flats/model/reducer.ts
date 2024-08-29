import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IInitialState {
    view: "layout" | "rows";
}

const initialState: IInitialState = {
    view: "layout",
};

export const flatsViewSlice = createSlice({
    name: "flatsView",
    initialState,
    reducers: {
        setView: (state, action: PayloadAction<"layout" | "rows">) => {
            state.view = action.payload;
        },
    },
});

export const { setView } = flatsViewSlice.actions;
export default flatsViewSlice.reducer;
