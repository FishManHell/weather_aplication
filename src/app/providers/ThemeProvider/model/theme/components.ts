import { Theme } from '@mui/joy/styles';
import type { AlertTypeMap } from "@mui/joy/Alert";


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
                background: props.theme.palette.background.card,
                borderRadius: props.theme.radius.lg
            }),
        },
    },
    JoyInput: {
        styleOverrides: {
            root: (props: { theme: Theme}) => ({
                background: props.theme.palette.background.card,
                borderRadius: props.theme.radius.lg
            }),
            input: (props: {theme: Theme}) => ({
                color: props.theme.palette.text.primary,
            }),
        }
    },

    JoyLink: {
        styleOverrides: {
            root: () => ({
                textDecoration: 'none',
                '&:hover': {
                    textDecoration: 'none',
                },
            }),
        },
    },

    JoyAlert: {
        styleOverrides: {
            root: ({ownerState, theme}: { theme: Theme, ownerState: AlertTypeMap['props']}) => ({
                backgroundColor: ownerState.color === 'success' ? "#2e7d32" :  theme.vars.palette.background.surface
            })
        }
    }
};