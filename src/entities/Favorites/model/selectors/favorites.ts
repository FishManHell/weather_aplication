import {StateSchema} from "app/providers/storeProvider";
import {FavoriteCitiesMap} from "../types/favoriteCitiesSchema";

export const selectFavoriteCities = (state: StateSchema, cities: string[]) => {
    return cities.reduce<FavoriteCitiesMap>((obj, city) => {
        obj[city] = state.api.favorites.entities[city] ?? { city: undefined, loading: true, error: undefined }
        return obj
    }, {})
};