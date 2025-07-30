import {useEffect, useState} from "react";

export interface Positions {
    lat: number;
    lon: number;
}

const DEFAULT_POSITIONS: Positions = { lat: 48.4647, lon: 35.0462}

export function useGetGeolocation() {
    const [positions, setPositions] = useState<Positions | null>(null);

    useEffect(() => {
        let resolved = false;

        const resolveOnce = (newPos: Positions) => {
            if (!resolved) {
                resolved = true;
                setPositions(newPos);
            }
        };

        if (!navigator.geolocation) {
            console.error('Geolocation not supported, using default.');
            resolveOnce(DEFAULT_POSITIONS)
            return
        }

        navigator.geolocation.getCurrentPosition((pos) => {
            resolveOnce({lat: pos.coords.latitude, lon: pos.coords.longitude})
        },  (err) => {
            console.error('geolocation error, fallback:', err);
            if (err.code === 1) {
                resolveOnce(DEFAULT_POSITIONS)
            }
            return
            }, {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            })
    }, []);

    return positions
}