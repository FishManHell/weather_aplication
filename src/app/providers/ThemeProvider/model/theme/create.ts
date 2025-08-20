import {extendTheme} from "@mui/joy/styles";
import {COMPONENTS} from "./components";
import {Light} from "./light";
import {Dark} from "./dark";

export const theme = extendTheme({
    radius: {
        lg: '25px'
    },
    components: COMPONENTS,
    colorSchemes: {
        light: Light,
        dark: Dark,
    },
    typography: {
        "body-lg": {
            fontSize: "clamp(14px, 2vw, 20px)"
        },
        "body-md": {
            fontSize: "clamp(12px, 1.6vw, 16px)",
        },
        h3: {
            fontSize: "clamp(20px, 2.5vw, 28px)",
        },
    }
})