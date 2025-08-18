import {WeatherByCitySchema} from "entities/Weather";

export type Favorite = string

export enum WeatherCardSize {
    BIG = 'big-card',
    MEDIUM = 'medium-card',
}

export interface WeatherCardProps {
    className?: string;
    city?: WeatherByCitySchema;
    loading?: boolean;
    size?: WeatherCardSize;
    onRemoveFavorite?: (cityName: string) => void
}