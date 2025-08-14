import {INavbarItem} from "./types/navbarItem"
import {RoutePath} from "shared/config/routeConfig/routeConfig";

export const NavbarItemsList: INavbarItem[] = [
    {
        path: RoutePath.today,
        text: "Today"
    },
    {
        path: RoutePath.favorite,
        text: "Favorite"
    },
]