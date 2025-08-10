import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/storeProvider";
import {City} from "../types/citySchema";
import {fetchHourlyWeatherByCoords} from "entities/Today/model/services/fetchHourlyWeatherByCoords";


export const fetchCityPosition = createAsyncThunk<City, string, ThunkConfig<string>>(
    'city/fetchCityPosition',
    async (city, thunkApi) => {
        const {rejectWithValue, extra: {api}, dispatch} = thunkApi
        try {
            const {data} = await api.get(`/data/2.5/weather`, {params: {q: city}});
            if (!data) throw new Error()
            else {
                const {coord: {lat, lon}} = data
                dispatch(fetchHourlyWeatherByCoords({lat, lon, exclude: 'current,daily,minutely,alerts'}))
            }
            return data
        } catch (error) {
            console.log(error)
            return rejectWithValue('Error')
        }
})