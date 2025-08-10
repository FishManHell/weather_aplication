import {Action, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {StateSchema, ThunkExtraArg} from "../config/stateSchema";
import {$api} from "shared/api/api";
import {unitSwitcherReducer} from "shared/ui/UnitSwitcher";
import {buildNestedReducer} from "../config/buildNestedReducer";
import {weatherApi} from "shared/api/weatherApi";
import {cityReducer, hourlyWeatherByCoordsReducer} from "entities/Today";
import {currentLocationReducer} from "entities/CurrentLocation";

export function createReduxStore(initialState: StateSchema) {

    const rootReducer = buildNestedReducer<StateSchema>({
        ui: {
            switchers: {
                unit: unitSwitcherReducer,
            },
            currentLocation: currentLocationReducer
        },
        api: {
            today: {
                location: cityReducer,
                forecastHourly: hourlyWeatherByCoordsReducer
            }
        },
        [weatherApi.reducerPath]: weatherApi.reducer,
    })

    const extraArgument: ThunkExtraArg = {api: $api}

    return configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({
                thunk: {
                    extraArgument
                },
            }).concat(weatherApi.middleware)
        }
    })
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = ThunkDispatch<StateSchema, ThunkExtraArg, Action>;
export type RootState = ReturnType<AppStore['getState']>;
