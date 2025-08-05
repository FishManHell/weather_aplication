import '@mui/joy/styles';

declare module '@mui/joy/styles' {
    interface PaletteBackground {
        card?: string;
    }

    interface PaletteBackgroundOptions {
        card?: string;
    }
}