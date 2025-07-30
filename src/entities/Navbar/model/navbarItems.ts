import {Navbar} from "./types/navbarSchema"
import {RoutePath} from "shared/config/routeConfig/routeConfig";

export const NavbarItemsList: Navbar[] = [
    {
        path: RoutePath.today,
        text: "Today"
    },
    {
        path: RoutePath.tomorrow,
        text: "Tomorrow"
    },
    {
        path: RoutePath.favorite,
        text: "Favorite"
    },
]