import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/storeProvider";
import {FavoriteCity} from "../types/favoriteCitiesSchema";


export const fetchFavoriteCities = createAsyncThunk<FavoriteCity, string, ThunkConfig<string>>(
    'favorite/fetchFavoriteCities',
    async (city, thunkAPI) => {
        const {extra: {api}, rejectWithValue} = thunkAPI
        try {
            const {data} = await api.get(`/data/2.5/weather?q=${city}`)
            if (!data) throw new Error();
            return data
        } catch (error) {
            return rejectWithValue('Error')
        }
})