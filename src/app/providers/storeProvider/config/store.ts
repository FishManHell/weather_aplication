import {Action, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {StateSchema, ThunkExtraArg} from "../config/stateSchema";
import {$api} from "shared/api/api";
import {unitSwitcherReducer} from "shared/ui/UnitSwitcher";
import {buildNestedReducer} from "../config/buildNestedReducer";
import {themeSwitcherReducer} from "shared/ui/ThemeSwitcher";

export function createReduxStore(initialState: StateSchema) {

    const rootReducer = buildNestedReducer<StateSchema>({
        ui: {
            switchers: {
                unit: unitSwitcherReducer,
                theme: themeSwitcherReducer
            }
        }
    })

    const extraArgument: ThunkExtraArg = {api: $api}

    return configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument
            },
        }),
    })
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = ThunkDispatch<StateSchema, ThunkExtraArg, Action>;
export type RootState = ReturnType<AppStore['getState']>;
