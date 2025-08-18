import {AxiosInstance} from "axios";
import {UnitSwitcherSchema} from "shared/ui/UnitSwitcher";
import {weatherApi} from "shared/api/weatherApi";
import {HourlyWeatherSchema, CitySchema} from "entities/Today";
import {CurrentLocationSchema} from "entities/CurrentLocation";
import {FavoriteCitiesSchema} from "entities/Favorites";

interface TodaySchema {
    location: CitySchema,
    forecastHourly: HourlyWeatherSchema
}

interface SwitchersSchema {
    unit: UnitSwitcherSchema
}


interface UiSchema {
    switchers: SwitchersSchema,
    currentLocation: CurrentLocationSchema,

}

interface ApiSchema {
    today: TodaySchema,
    favorites: FavoriteCitiesSchema
}

export interface StateSchema {
    ui: UiSchema;
    api: ApiSchema;
    [weatherApi.reducerPath]: ReturnType<typeof weatherApi.reducer>
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg,
    state: StateSchema
}