import {StateSchema} from "app/providers/storeProvider";
import {Theme} from "app/providers/ThemeProvider";

export const selectThemeSwitcherTheme = (state: StateSchema) => state.ui.switchers.theme.theme ?? Theme.LIGHT