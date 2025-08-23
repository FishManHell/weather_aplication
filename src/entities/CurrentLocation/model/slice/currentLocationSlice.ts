import {CurrentLocationSchema} from "../types/currentLocationSchema";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCurrentLocation} from "../services/fetchCurrentLocation";
import {Coordinates} from "shared/types";
import {DEFAULT_COORDINATES} from "shared/lib/constants/constants";

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
                state.error = payload ?? { message: "Unknown error", code: -1 };
                state.location = DEFAULT_COORDINATES;
            })
    }
})

export const {reducer: currentLocationReducer} = currentLocationSlice