import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchHourlyWeatherByCoords} from "entities/Today/model/services/fetchHourlyWeatherByCoords";
import {HourlyWeatherSchema, OneCallWeatherSchema} from "entities/Today/model/types/oneCallWeatherSchema";


const initialState: HourlyWeatherSchema = {
    hourly: [],
    isLoading: false,
    error: undefined,
}

const hourlyWeatherByCoordsSlice = createSlice({
    name: "hourlyWeather",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchHourlyWeatherByCoords.pending, state => {
            state.isLoading = true;
            state.error = undefined
        })
            .addCase(fetchHourlyWeatherByCoords.fulfilled, (state, {payload}: PayloadAction<OneCallWeatherSchema>) => {
                state.isLoading = false;
                state.hourly = payload.hourly
                    .slice(0, 24)
                    .filter((hour) => {
                        return new Date(hour.dt * 1000).getHours() % 3 === 0
                    });
            })
            .addCase(fetchHourlyWeatherByCoords.rejected, (state, error) => {
                state.isLoading = false;
                state.error = error.payload
            })
    }
})

export const {reducer: hourlyWeatherByCoordsReducer, actions: hourlyWeatherByCoordsActions} = hourlyWeatherByCoordsSlice;