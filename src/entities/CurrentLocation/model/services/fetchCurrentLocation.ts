import {createAsyncThunk} from "@reduxjs/toolkit";
import {Coordinates} from "shared/types";
import {ThunkConfig} from "app/providers/storeProvider";

interface geoLocationError {
    message: string;
    code: number;
}

export const fetchCurrentLocation = createAsyncThunk<
    Coordinates,
    void,
    ThunkConfig<geoLocationError>
>(
    'currentLocation/fetchCurrentLocation',
    async (_, thunkAPI) => {
        try {
            return await new Promise<Coordinates>((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    ({coords: {longitude: lon, latitude: lat}}) => {
                        return resolve({ lat, lon })
                    },
                    (err) => {
                        console.error('geolocation error, fallback:', err);
                        reject({ message: err.message, code: err.code });
                    },
                    {enableHighAccuracy: true, timeout: 10000, maximumAge: 0}
                );
            });
        } catch (error) {
            return thunkAPI.rejectWithValue({ message: 'Geolocation failed', code: 1 });
        }
    }
);
