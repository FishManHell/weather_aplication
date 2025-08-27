import {WeatherByCitySchema} from "entities/Weather";

export const cityData: WeatherByCitySchema = {
    coord: {
        lon: 34.5567,
        lat: 31.6794
    },
    weather: [
        {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d"
        }
    ],
    base: "stations",
    main: {
        temp: 29.47,
        feels_like: 31.85,
        temp_min: 29.47,
        temp_max: 29.47,
        pressure: 1008,
        humidity: 60,
        sea_level: 1008,
        grnd_level: 1006
    },
    visibility: 10000,
    wind: {
        speed: 5.37,
        deg: 280,
        gust: 5.61
    },
    clouds: {
        "all": 0
    },
    dt: 1756129094,
    sys: {
        country: "IL",
        sunrise: 1756091593,
        sunset: 1756138498
    },
    timezone: 10800,
    id: 295620,
    name: "Ashquelon",
    cod: 200
}