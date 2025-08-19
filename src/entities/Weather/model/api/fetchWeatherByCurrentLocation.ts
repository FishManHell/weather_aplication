import {weatherApi} from "shared/api/weatherApi";
import {WeatherByCitySchema} from "../types/weatherByCitySchema";
import {CityWeatherParams} from "../types/cityWeatherParams";


const defaultParams = {appid: process.env.REACT_APP_API_KEY || '', units: 'metric'};

export const fetchWeatherByCurrentLocation = weatherApi.injectEndpoints({
    endpoints: (builder) => ({
        getWeatherByCity: builder.query<WeatherByCitySchema, CityWeatherParams>({
            query: (params) => {
                const {lat, lon} = params
                const usp = new URLSearchParams({ ...defaultParams, lat: String(lat), lon: String(lon)});
                return `?${usp.toString()}`;
            },
        }),
    }),
})

export const {useGetWeatherByCityQuery} = fetchWeatherByCurrentLocation
