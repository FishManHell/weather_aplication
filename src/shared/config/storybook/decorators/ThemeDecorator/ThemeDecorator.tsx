import {StoryContext, StoryFn} from "@storybook/react";
import {CssBaseline} from "@mui/joy";
import {CssVarsProvider} from '@mui/joy/styles';
import {theme} from "app/providers/ThemeProvider/model/theme/create";
import {JoyThemeWrapper} from "./JoyThemeWrapper/JoyThemeWrapper";

export type ThemeType = "dark" | "light";

export const ThemeDecorator = (Story: StoryFn, context: StoryContext) => {
    const mode = (context.globals.theme as ThemeType) || "light";

    return (
        <CssVarsProvider theme={theme} disableTransitionOnChange>
            <CssBaseline />
            <JoyThemeWrapper mode={mode}>
                <Story />
            </JoyThemeWrapper>
        </CssVarsProvider>
    );
};