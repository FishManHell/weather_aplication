import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchHourlyWeatherByCoords} from "../services/fetchHourlyWeatherByCoords";
import {HourlyWeatherSchema, OneCallWeatherSchema} from "../types/oneCallWeatherSchema";

const initialState: HourlyWeatherSchema = {
    hourly: [],
    isLoading: true,
    error: undefined,
}

const hourlyWeatherByCoordsSlice = createSlice({
    name: "hourlyWeather",
    initialState,
    reducers: {
        resetHourlyWeatherByCoordsState: () => initialState
    },
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

                console.log(payload.hourly
                    .slice(0, 24)
                    .filter((hour) => {
                        return new Date(hour.dt * 1000).getHours() % 3 === 0
                    }))
            })
            .addCase(fetchHourlyWeatherByCoords.rejected, (state, error) => {
                state.isLoading = false;
                state.error = error.payload
            })
    }
})

export const {reducer: hourlyWeatherByCoordsReducer, actions: hourlyWeatherByCoordsActions} = hourlyWeatherByCoordsSlice;