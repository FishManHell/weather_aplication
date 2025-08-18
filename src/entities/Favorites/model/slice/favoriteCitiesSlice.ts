import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FavoriteCitiesSchema, FavoriteCity} from "../types/favoriteCitiesSchema";
import {fetchFavoriteCities} from "entities/Favorites";

const initialState: FavoriteCitiesSchema = {
    entities: {}
}

const favoriteCitiesSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        onRemoveFavoriteCity(state, { payload }: PayloadAction<string>) {
            delete state.entities[payload];
        },
        resetFavoriteState: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFavoriteCities.pending, (state, {meta: {arg}}) => {
            state.entities[arg] = {
                loading: true,
                error: undefined,
            }
        })
            .addCase(fetchFavoriteCities.fulfilled, (state, {payload}: PayloadAction<FavoriteCity>) => {
                state.entities[payload.name] = {
                    loading: false,
                    city: payload
                }
            })
            .addCase(fetchFavoriteCities.rejected, (state, {payload, meta: {arg}}) => {
                state.entities[arg] = {
                    ...state.entities[arg],
                    loading: false,
                    error: payload,
                }
            })
    }
})

export const {reducer: favoriteCitiesReducer, actions: favoriteCitiesActions} = favoriteCitiesSlice