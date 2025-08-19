import {createAsyncThunk} from "@reduxjs/toolkit";
import {OneCallWeatherSchema} from "../types/oneCallWeatherSchema";
import {ThunkConfig} from "app/providers/storeProvider";
import {Coordinates} from "shared/types";

export enum WeatherExclude {
    Current = "current",
    Minutely = "minutely",
    Hourly = "hourly",
    Daily = "daily",
    Alerts = "alerts",
}

interface FetchHourlyWeatherByCoordsParams extends Coordinates {
    exclude: string
}


export const fetchHourlyWeatherByCoords = createAsyncThunk<
    OneCallWeatherSchema,
    FetchHourlyWeatherByCoordsParams,
    ThunkConfig<string>
>(
    'hourlyWeather/fetchHourlyWeatherByCoords',
    async (params, thunkAPI) => {
    const {rejectWithValue, extra: {api}} = thunkAPI
    try {
        const {data} = await api.get(`/data/3.0/onecall`, {params})
        if (!data)  throw new Error()
        return data
    } catch (error) {
        return rejectWithValue('Error')
    }
})