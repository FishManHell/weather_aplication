import {weatherApi} from "shared/api/weatherApi";
import {CurrentWeatherParams} from "../types/сurrentCitySchema";

const fetchWeatherByCurrentLocation = weatherApi.injectEndpoints({
    endpoints: (builder) => ({
        getWeatherByCity: builder.query({
            query: (params: CurrentWeatherParams) => {
                const {lat, lon, units} = params
                return `?appid=${process.env.REACT_APP_API_KEY}&lat=${lat}&lon=${lon}&units=${units}`
            },
        }),
    })
})

export const {useGetWeatherByCityQuery} = fetchWeatherByCurrentLocation
