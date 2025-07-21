import {useContext, useEffect} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

interface useThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): useThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const themeRes = theme ?? Theme.LIGHT;

    const getTheme = () => {
        if (themeRes === Theme.LIGHT) return Theme.DARK;
        return Theme.LIGHT;
    }

    const toggleTheme = () => {
        const newTheme = getTheme();
        setTheme?.(newTheme);
        document.body.className = newTheme
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    useEffect(() => {
        if (!document.body.className.includes(themeRes)) {
            document.body.className = themeRes;
        }
    }, [themeRes]);


    return {theme: themeRes, toggleTheme}
}