import {RouteProps} from "react-router-dom";
import {TodayPage} from "pages/TodayPage";
import {FavoritePage} from "pages/FavoritePage";

export enum AppRouters {
    TODAY = 'today',
    FAVORITE= 'favorite',
}

export const RoutePath:Record<AppRouters, string> = {
    [AppRouters.TODAY]: '/',
    [AppRouters.FAVORITE]: '/favorite'
}

export const routeConfig: Record<AppRouters, RouteProps> = {
    [AppRouters.TODAY]: {
        path: RoutePath.today,
        element: <TodayPage/>
    },
    [AppRouters.FAVORITE]: {
        path: RoutePath.favorite,
        element: <FavoritePage/>

    }
}