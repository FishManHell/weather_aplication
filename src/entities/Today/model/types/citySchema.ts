import {WeatherByCitySchema} from "entities/Weather";
import {Coordinates} from "shared/types";

export type City = WeatherByCitySchema;

export interface CitySchema {
    city?: City,
    isLoading: boolean;
    error?: string;
}


interface FetchCityByCity {
    type: 'city';
    city: string;
}

interface FetchCityByCoords extends Coordinates{
    type: 'coords';
}

export type FetchCityPositionParams = FetchCityByCity | FetchCityByCoords;