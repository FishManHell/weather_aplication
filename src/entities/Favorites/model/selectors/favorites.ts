import {StateSchema} from "app/providers/storeProvider";

export const selectFavoriteCities = (state: StateSchema) => state.api.favorites.favoriteCities;
export const selectFavoriteLoadings = (state: StateSchema) => state.api.favorites.favoriteLoadings;
export const selectFavoriteErrors = (state: StateSchema) => state.api.favorites.favoriteErrors;