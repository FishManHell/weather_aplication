import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/storeProvider";
import {City, FetchCityPositionParams} from "../types/citySchema";
import {fetchHourlyWeatherByCoords} from "../services/fetchHourlyWeatherByCoords";
import {setItem} from "helpers/localStorage";

export const fetchCityPosition = createAsyncThunk<City, FetchCityPositionParams, ThunkConfig<string>>(
    'city/fetchCityPosition',
    async (params, thunkApi) => {
        const {rejectWithValue, extra: {api}, dispatch, getState} = thunkApi;
        const  units =  getState().ui.switchers.unit.temperatureUnit

        const queryParams: Record<string, string | number> = { units };

        if (params.type === "city") queryParams.q = params.city;
        else {
            queryParams.lat = params.lat;
            queryParams.lon = params.lon;
        }

        try {
            const {data} = await api.get(`/data/2.5/weather`, {params: queryParams});
            if (!data) throw new Error();
            else {
                setItem('city', data.name);
                dispatch(fetchHourlyWeatherByCoords({
                    ...data.coord,
                    exclude: 'current,daily,minutely,alerts',
                    units
                }))
            }
            return data
        } catch (error) {
            return rejectWithValue('Error')
        }
})