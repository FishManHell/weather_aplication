import {City, CitySchema} from "entities/Today/model/types/citySchema";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCityPosition} from "../services/fetchCityPosition";

const initialState: CitySchema = {
    city: undefined,
    isLoading: false,
    error: undefined,
}


const citySlice = createSlice({
    name: "city",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCityPosition.pending, state => {
            state.isLoading = true
            state.error = undefined
        })
            .addCase(fetchCityPosition.fulfilled, (state, {payload}: PayloadAction<City>) => {
                state.isLoading = false
                state.city = payload
            })
            .addCase(fetchCityPosition.rejected, (state, error) => {
                state.isLoading = false
                state.error = error.payload
            })
    },
})

export const {reducer: cityReducer, actions: cityActions} = citySlice