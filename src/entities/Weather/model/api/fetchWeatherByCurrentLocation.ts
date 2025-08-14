import {weatherApi} from "shared/api/weatherApi";
import {WeatherByCitySchema} from "../types/weatherByCitySchema";
import {CityWeatherParams} from "../types/cityWeatherParams";


export const fetchWeatherByCurrentLocation = weatherApi.injectEndpoints({
    endpoints: (builder) => ({
        getWeatherByCity: builder.query<WeatherByCitySchema, CityWeatherParams>({
            query: (params) => {
                const {lat, lon, units} = params
                return `?appid=${process.env.REACT_APP_API_KEY}&lat=${lat}&lon=${lon}&units=${units}`
            },
        }),
    }),
})

export const {useGetWeatherByCityQuery} = fetchWeatherByCurrentLocation
