import {CurrentLocationSchema} from "../types/currentLocationSchema";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCurrentLocation} from "../services/fetchCurrentLocation";
import {Coordinates} from "shared/types";

const initialState: CurrentLocationSchema = {
    location: undefined,
    error: undefined,
    status: undefined
}

const currentLocationSlice = createSlice({
    name: "currentLocation",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCurrentLocation.pending, state => {
            state.status = "loading"
        })
            .addCase(fetchCurrentLocation.fulfilled, (state, {payload}: PayloadAction<Coordinates>) => {
                state.status = 'succeeded';
                state.location = payload
            })
            .addCase(fetchCurrentLocation.rejected, (state, {payload}) => {
                state.status = 'failed';
                state.error = payload
            })
    }
})

export const {reducer: currentLocationReducer} = currentLocationSlice