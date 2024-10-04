import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PartialFlatsItem } from "@/features/flats/model/types/flats.model";

// Функция для загрузки избранного из localStorage
const loadFavoritesFromLocalStorage = (): PartialFlatsItem[] => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
};

// Функция для сохранения избранного в localStorage
const saveFavoritesToLocalStorage = (favorites: PartialFlatsItem[]) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
};

export interface FavoritesState {
    favorites: PartialFlatsItem[];
}

const initialState: FavoritesState = {
    favorites: loadFavoritesFromLocalStorage(), // Инициализация избранного из localStorage
};

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<PartialFlatsItem>) => {
            const existingIndex = state.favorites.findIndex((plan) => plan.id === action.payload.id);
            if (existingIndex >= 0) {
                // Удаление из избранного
                state.favorites.splice(existingIndex, 1);
            } else {
                // Добавление в избранное
                state.favorites.push(action.payload);
            }

            // Сохранение избранного в localStorage
            saveFavoritesToLocalStorage(state.favorites);
        },
    },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
