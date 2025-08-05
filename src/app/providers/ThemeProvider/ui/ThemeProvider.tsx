import {FC, ReactNode} from "react";
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import {theme} from "../model/theme/create";

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
    return (
        <CssVarsProvider theme={theme} >
            <CssBaseline/>
            {children}
        </CssVarsProvider>
    );
};

export default ThemeProvider;