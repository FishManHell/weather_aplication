import { Theme } from '@mui/joy/styles';

export const COMPONENTS = {
    JoySvgIcon: {
        styleOverrides: {
            root: (props: { theme: Theme}) => ({
                color: props.theme.palette.text.primary,
            }),
        },
    },
    JoyTypography: {
        styleOverrides: {
            root: (props: { theme: Theme}) => ({
                color: props.theme.palette.text.primary,
            }),
        },
    },
    JoyCard: {
        styleOverrides: {
            root: (props: { theme: Theme}) => ({
                background: props.theme.palette.background.card
            }),
        },
    },
    JoyInput: {
        styleOverrides: {
            root: (props: { theme: Theme}) => ({
                background: props.theme.palette.background.card,
            }),
            input: (props: {theme: Theme}) => ({
                color: props.theme.palette.text.primary,
            }),
        }
    }
};