import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/storeProvider";
import {City} from "../types/citySchema";
import {fetchHourlyWeatherByCoords} from "../services/fetchHourlyWeatherByCoords";
import {setItem} from "helpers/localStorage";

export const fetchCityPosition = createAsyncThunk<City, string, ThunkConfig<string>>(
    'city/fetchCityPosition',
    async (city, thunkApi) => {
        const {rejectWithValue, extra: {api}, dispatch, getState} = thunkApi;
        const units =  getState().ui.switchers.unit.unit === "°C" ? "metric" : "imperial"

        try {
            const {data} = await api.get(`/data/2.5/weather`, {params: {q: city, units}});
            if (!data) throw new Error()
            else {
                const {coord: {lat, lon}} = data
                setItem('city', city);
                dispatch(fetchHourlyWeatherByCoords({lat, lon, exclude: 'current,daily,minutely,alerts', units}))
            }
            return data
        } catch (error) {
            console.log(error)
            return rejectWithValue('Error')
        }
})