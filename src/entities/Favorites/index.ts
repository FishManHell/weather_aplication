import {fetchFavoriteCities} from "./model/service/fetchFavoriteCities"
import {favoriteCitiesReducer, favoriteCitiesActions} from "./model/slice/favoriteCitiesSlice"
import {FavoriteCitiesSchema} from "./model/types/favoriteCitiesSchema"
import {selectFavoriteCities, selectFavoriteLoadings, selectFavoriteErrors} from "./model/selectors/favorites"

export {
    // fetches
    fetchFavoriteCities,

    // reducer
    favoriteCitiesReducer,

    //actions
    favoriteCitiesActions,

    //schemes
    FavoriteCitiesSchema,

    //selectors
    selectFavoriteCities,
    selectFavoriteLoadings,
    selectFavoriteErrors
}