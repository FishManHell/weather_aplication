import {weatherApi} from "shared/api/weatherApi";
import {WeatherByCitySchema} from "../types/weatherByCitySchema";
import {CityWeatherParams} from "../types/cityWeatherParams";


const defaultParams = {appid: process.env.REACT_APP_API_KEY || ''};

export const fetchWeatherByCurrentLocation = weatherApi.injectEndpoints({
    endpoints: (builder) => ({
        getWeatherByCity: builder.query<WeatherByCitySchema, CityWeatherParams>({
            query: (params) => {
                const {lat, lon, units} = params
                const usp = new URLSearchParams({ ...defaultParams, units, lat: String(lat), lon: String(lon)});
                return `?${usp.toString()}`;
            },
        }),
    }),
})

export const {useGetWeatherByCityQuery} = fetchWeatherByCurrentLocation
