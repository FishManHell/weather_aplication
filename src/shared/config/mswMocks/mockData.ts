import {DEFAULT_COORDINATES} from "shared/lib/constants/constants";

export const defaultCity = {
    coord: DEFAULT_COORDINATES,
    weather: [{ id: 801, main: "Clouds", description: "few clouds", icon: "02n" }],
    main: { temp: 27.85, feels_like: 30.13, temp_min: 26.73, temp_max: 28.1, pressure: 1010, humidity: 68 },
    wind: { speed: 3.6, deg: 250 },
    clouds: { all: 20 },
    sys: { country: "IL", sunrise: 1756177951, sunset: 1756224799 },
    timezone: 10800,
    id: 293397,
    name: "New City",
    cod: 200
};