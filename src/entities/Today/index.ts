import {cityReducer, cityActions} from "./model/slices/citySlice"
import {hourlyWeatherByCoordsReducer, hourlyWeatherByCoordsActions} from "./model/slices/hourlyWeatherByCoordsSlice"
import {OneCallWeatherHourly, HourlyWeatherSchema} from "./model/types/oneCallWeatherSchema"
import {CitySchema} from "./model/types/citySchema"
import {fetchCityPosition} from "./model/services/fetchCityPosition"
import {selectCity, selectCityLoading} from "./model/selectors/citySelectors"
import {selectHourlyByCoords, selectHourlyByCoordsLoading} from "./model/selectors/hourlyWeatherByCoordSelectors"

export {
    // reducers
    cityReducer,
    hourlyWeatherByCoordsReducer,
    hourlyWeatherByCoordsActions,

    //actions
    cityActions,

    // fetches
    fetchCityPosition,

    // selectors
    selectCity,
    selectHourlyByCoords,
    selectHourlyByCoordsLoading,
    selectCityLoading,

    // schemes
    OneCallWeatherHourly,
    HourlyWeatherSchema,
    CitySchema,
}