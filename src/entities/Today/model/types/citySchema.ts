import {WeatherByCitySchema} from "entities/Weather";

export type City = WeatherByCitySchema;

export interface CitySchema {
    city?: City,
    isLoading: boolean;
    error?: string;
}