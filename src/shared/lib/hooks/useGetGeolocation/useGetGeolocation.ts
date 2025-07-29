import {useEffect, useState} from "react";

export interface Positions {
    lat: number;
    long: number;
}

const DEFAULT_POSITIONS: Positions = { lat: 31.66926000, long: 34.57149000}

export function useGetGeolocation() {
    const [positions, setPositions] = useState<Positions>(DEFAULT_POSITIONS);

    useEffect(() => {
       if (!navigator.geolocation) {
           console.warn('Geolocation not supported, using default.');
           setPositions(DEFAULT_POSITIONS);
           return
       }

       navigator.geolocation.getCurrentPosition((pos) => {
           setPositions({lat: pos.coords.latitude, long: pos.coords.longitude})

       },  (err) => {
           console.warn('geolocation error, fallback:', err);
           setPositions(DEFAULT_POSITIONS);
       },
        {
            enableHighAccuracy: true,
                timeout: 10000,
            maximumAge: 0,
        }
       )
    }, []);

    return positions

}