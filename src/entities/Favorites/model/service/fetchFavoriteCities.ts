import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/storeProvider";
import {FavoriteCity} from "../types/favoriteCitiesSchema";


export const fetchFavoriteCities = createAsyncThunk<FavoriteCity, string, ThunkConfig<string>>(
    'favorite/fetchFavoriteCities',
    async (id, thunkAPI) => {
        const {extra: {api}, rejectWithValue, getState} = thunkAPI;
        const units =  getState().ui.switchers.unit.unit === "°C" ? "metric" : "imperial"

        try {
            const {data} = await api.get(`/data/2.5/weather`, {params: {id, units}})
            if (!data) throw new Error();
            return data
        } catch (error) {
            return rejectWithValue('Error')
        }
})