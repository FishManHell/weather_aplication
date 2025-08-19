import {Coordinates} from "shared/types";
import {ErrorCallbackFactory, ResolveParams, WatchPositionFallback} from "../types/geo";

const options: PositionOptions = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
};

const watchPositionFallback: WatchPositionFallback = ({resolve, reject}) => {
    const watchId = navigator.geolocation.watchPosition(
        ({ coords: { latitude: lat, longitude: lon } }) => {
            navigator.geolocation.clearWatch(watchId);
            resolve({ lat, lon });
        },
        (watchErr) => {
            navigator.geolocation.clearWatch(watchErr.code);
            reject({ message: watchErr.message, code: watchErr.code });
        },
        options
    );
};

const success = (resolve: ResolveParams) =>
    ({ coords: { latitude, longitude } }: GeolocationPosition) => {
        resolve({ lat: latitude, lon: longitude });
    };

const error: ErrorCallbackFactory = ({resolve, reject}) =>
    (err) => {

        console.error("Geolocation error:", err);

        if (err.code === 1) {
            watchPositionFallback({resolve, reject});
        } else {
            reject({ message: err.message, code: err.code });
        }
    };


export const getPosition = (): Promise<Coordinates> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            success(resolve),
            error({resolve, reject}),
            options
        );
    });
};