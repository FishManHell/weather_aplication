import {WeatherByCitySchema} from "entities/Weather";

export type FavoriteCity = WeatherByCitySchema

interface FavoriteCityState {
    city?: FavoriteCity;
    loading?: boolean
    error?: string
}

export type FavoriteCitiesMap = Record<string, FavoriteCityState>

export interface FavoriteCitiesSchema {
    entities: FavoriteCitiesMap
}