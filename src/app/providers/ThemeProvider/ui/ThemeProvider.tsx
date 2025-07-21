import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/ThemeContext";
import {FC, ReactNode, useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({children, initialTheme}) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
    const defaultProps = useMemo(() => ({theme, setTheme}), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;