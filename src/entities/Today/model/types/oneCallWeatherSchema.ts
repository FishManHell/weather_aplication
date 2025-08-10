import {Coordinates} from "shared/types";

interface CurrentWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface BaseWeatherData {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: CurrentWeather[]
}


export interface OneCallWeatherHourly extends BaseWeatherData {
    pop: number
}

// interface OneCallWeatherCurrent extends BaseWeatherData{
//     sunrise: number;
//     sunset: number;
// }


export interface OneCallWeatherSchema extends Coordinates {
    hourly: OneCallWeatherHourly[];
    timezone: string;
    timezone_offset: number;
}

export interface HourlyWeatherSchema {
    hourly?: OneCallWeatherHourly[];
    isLoading: boolean;
    error?: string;
}