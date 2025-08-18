import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FavoriteCitiesSchema, FavoriteCity} from "entities/Favorites/model/types/favoriteCitiesSchema";
import {fetchFavoriteCities} from "entities/Favorites";

const initialState: FavoriteCitiesSchema = {
    favoriteCities: {},
    favoriteErrors: {},
    favoriteLoadings: {}
}

const favoriteCitiesSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        resetFavoriteState: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFavoriteCities.pending, (state, {meta: {arg}}) => {
            state.favoriteLoadings[arg] = true;
            state.favoriteErrors[arg] = undefined;
        })
            .addCase(fetchFavoriteCities.fulfilled, (state, {payload}: PayloadAction<FavoriteCity>) => {
                const city = payload.name
                state.favoriteCities[city] = payload;
                state.favoriteLoadings[city] = false;
            })
            .addCase(fetchFavoriteCities.rejected, (state, {payload, meta: {arg}}) => {
                state.favoriteLoadings[arg] = false;
                state.favoriteErrors[arg] = payload;
            })
    }
})

export const {reducer: favoriteCitiesReducer, actions: favoriteCitiesActions} = favoriteCitiesSlice