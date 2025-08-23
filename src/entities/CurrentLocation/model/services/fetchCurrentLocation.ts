import {createAsyncThunk} from "@reduxjs/toolkit";
import {Coordinates} from "shared/types";
import {ThunkConfig} from "app/providers/storeProvider";
import {getPosition} from "../services/geolocationHelpers";
import {geoLocationError} from "../types/currentLocationSchema";

export const fetchCurrentLocation = createAsyncThunk<
    Coordinates,
    void,
    ThunkConfig<geoLocationError>
>(
    'currentLocation/fetchCurrentLocation',
    async (_, thunkAPI) => {
        try {
            return await getPosition();
        } catch (error: any) {
            return thunkAPI.rejectWithValue({
                message: error.message || "Geolocation failed",
                code: error.code ?? -1
            });
        }
    }
);
