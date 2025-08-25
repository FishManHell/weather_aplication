import { Theme } from '@mui/joy/styles';
import type { AlertTypeMap } from "@mui/joy/Alert"

export const COMPONENTS = {
    JoyTypography: {
        styleOverrides: {
            root: ({theme}: { theme: Theme}) => ({
                color: theme.palette.text.primary,
            }),
        },
    },

    JoyCard: {
        styleOverrides: {
            root: ({theme}: { theme: Theme}) => ({
                background: theme.palette.background.card,
                borderRadius: theme.radius.lg
            }),
        },
    },
    JoyInput: {
        styleOverrides: {
            root: ({theme}: { theme: Theme}) => ({
                background: theme.palette.background.card,
                borderRadius: theme.radius.lg
            }),
            input: ({theme}: {theme: Theme}) => ({
                color: theme.palette.text.primary,
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