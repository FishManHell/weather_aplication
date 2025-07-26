import {ThemeSwitcher} from "./ui/ThemeSwitcher"
import {ThemeSwitcherSchema} from "./model/types/themeSwitcherSchema"
import {themeSwitcherActions, themeSwitcherReducer} from "./model/slice/themeSwitcherSlice"
import {selectThemeSwitcherTheme} from "./model/selectors/themeSwitcher"

export {ThemeSwitcher, ThemeSwitcherSchema, themeSwitcherReducer, selectThemeSwitcherTheme}