import {StateSchema} from "app/providers/storeProvider";
import {FavoriteCitiesMap} from "../types/favoriteCitiesSchema";

export const selectFavoriteCities = (state: StateSchema, cities: string[]) => {
    return cities.reduce<FavoriteCitiesMap>((obj, id) => {
        obj[id] = state.api.favorites.entities[id] ?? { city: undefined, loading: true, error: undefined }
        return obj
    }, {})
};