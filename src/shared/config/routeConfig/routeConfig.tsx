import {RouteProps} from "react-router-dom";
import {TodayPage} from "pages/TodayPage";
import {TomorrowPage} from "pages/TomorrowPage";
import {FavoritePage} from "pages/FavoritePage";


export enum AppRouters {
    TODAY = 'today',
    TOMORROW = 'tomorrow',
    FAVORITE= 'favorite',
}


export const RoutePath:Record<AppRouters, string> = {
    [AppRouters.TODAY]: '/',
    [AppRouters.TOMORROW]: '/tomorrow',
    [AppRouters.FAVORITE]: '/favorite'
}


export const routeConfig: Record<AppRouters, RouteProps> = {
    [AppRouters.TODAY]: {
        path: RoutePath.today,
        element: <TodayPage/>
    },
    [AppRouters.TOMORROW]: {
        path: RoutePath.tomorrow,
        element: <TomorrowPage/>
    },
    [AppRouters.FAVORITE]: {
        path: RoutePath.favorite,
        element: <FavoritePage/>

    }
}