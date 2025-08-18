import {WeatherByCitySchema} from "entities/Weather";

export type FavoriteCity = WeatherByCitySchema

export interface FavoriteCitiesSchema {
    favoriteCities: Record<string, FavoriteCity>;
    favoriteLoadings: Record<string, boolean>;
    favoriteErrors: Record<string, string | undefined>;

}