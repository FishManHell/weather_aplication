import {ThemeSwitcherSchema} from "../types/themeSwitcherSchema";
import {Theme} from "app/providers/ThemeProvider";
import {createSlice} from "@reduxjs/toolkit";
import {LOCAL_STORAGE_THEME_KEY} from "app/providers/ThemeProvider/lib/ThemeContext";


const initialState: ThemeSwitcherSchema = {
    theme: Theme.LIGHT
}


const themeSwitcherSlice = createSlice({
    name: 'themeSwitcher',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            const themeRes = state.theme ?? Theme.LIGHT;
            state.theme = themeRes === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
            document.body.className = themeRes
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeRes);
        }
    }
})


export const {
    reducer: themeSwitcherReducer,
    actions: themeSwitcherActions
} = themeSwitcherSlice