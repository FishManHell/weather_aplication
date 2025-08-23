import {
    ErrorCallback,
    GetPositionCallback,
    SettledRef,
    SuccessCallback,
    WatchPositionFallback
} from "../types/geo";

const options: PositionOptions = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
};

const watchPositionFallback: WatchPositionFallback = ({ resolve, reject }) => {
    const watchId = navigator.geolocation.watchPosition(
        ({ coords: { latitude: lat, longitude: lon } }) => {
            navigator.geolocation.clearWatch(watchId);
            resolve({ lat, lon });
        },
        (watchErr) => {
            navigator.geolocation.clearWatch(watchId);
            reject({ message: watchErr.message, code: watchErr.code });
        },
        options
    );
};

const success: SuccessCallback = ({resolve, settledRef}) => {
    return ({ coords: { latitude, longitude } }) => {
        if (settledRef.current) return;
        settledRef.current = true;

        resolve({ lat: latitude, lon: longitude });
    };
}

const error: ErrorCallback = ({ resolve, reject, settledRef }) => (err) => {
    console.error("Geolocation error:", err);

    if (settledRef?.current) return;
    settledRef.current = true;

    if (err.code === 1) {
        console.log("Geolocation failed. Trying fallback...");
        watchPositionFallback({ resolve, reject });
    } else {
        reject({ message: err.message, code: err.code });
    }
};

export const getPosition: GetPositionCallback = () => {
    return new Promise((resolve, reject) => {
        const settledRef: SettledRef = { current: false };

        navigator.geolocation.getCurrentPosition(
            success({resolve, settledRef}),
            error({ resolve, reject, settledRef }),
            options
        );
    });
};
