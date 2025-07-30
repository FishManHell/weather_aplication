import {AxiosInstance} from "axios";
import {UnitSwitcherSchema} from "shared/ui/UnitSwitcher";
import {ThemeSwitcherSchema} from "shared/ui/ThemeSwitcher";
import {weatherApi} from "shared/api/weatherApi";

interface SwitchersSchema {
    unit: UnitSwitcherSchema
    theme: ThemeSwitcherSchema
}

interface UiSchema {
    switchers: SwitchersSchema
}

interface ApiSchema {}

export interface StateSchema {
    ui: UiSchema;
    api?: ApiSchema; // thinking about this
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