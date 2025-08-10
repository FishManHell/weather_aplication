import {CurrentCitySchema} from "entities/Navbar";

export type City = CurrentCitySchema;

export interface CitySchema {
    city?: City,
    isLoading: boolean;
    error?: string;
}