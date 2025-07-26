import {AxiosInstance} from "axios";
import {UnitSwitcherSchema} from "shared/ui/UnitSwitcher";
import {ThemeSwitcherSchema} from "shared/ui/ThemeSwitcher";


interface SwitchersSchema {
    unit: UnitSwitcherSchema
    theme: ThemeSwitcherSchema
}


interface UiSchema {
    switchers: SwitchersSchema
}


interface ApiSchema {

}

export interface StateSchema {
    ui: UiSchema;
    // api: ApiSchema;
}



export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg,
    state: StateSchema
}