import {extendTheme} from "@mui/joy/styles";
import {COMPONENTS} from "./components";
import {Light} from "./light";
import {Dark} from "./dark";

export const theme = extendTheme({
    components: COMPONENTS,
    colorSchemes: {
        light: Light,
        dark: Dark
    }
})