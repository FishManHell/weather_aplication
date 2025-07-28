import {useEffect, useState} from "react";

export interface Positions {
    lat: number;
    long: number;
}
const DEFAULT_POSITIONS: Positions = { lat: 31.66926000, long: 34.57149000}

export function useGetGeolocation() {
    const [positions, setPositions] = useState<Positions>();

    useEffect(() => {
       if (!navigator.geolocation) {
           setPositions(DEFAULT_POSITIONS);
           return
       }

       navigator.geolocation.getCurrentPosition((pos) => {
           setPositions({lat: pos.coords.latitude, long: pos.coords.longitude})

       },  (err) => {
           console.warn('geolocation error, fallback:', err);
           setPositions(DEFAULT_POSITIONS);
       })
    }, []);

    return positions

}