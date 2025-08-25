import {ReactNode, useEffect} from "react";
import {useColorScheme} from "@mui/joy/styles";
import {ThemeType} from "../ThemeDecorator";

interface JoyThemeWrapperProps {
    mode: ThemeType;
    children: ReactNode;
}

export const JoyThemeWrapper = (props: JoyThemeWrapperProps) => {
    const { mode, children } = props;
    const { setMode } = useColorScheme();

    useEffect(() => {
        setMode(mode);
    }, [mode, setMode]);

    return <>{children}</>;
};