import cls from "./FavoritePage.module.scss"
import {ScrollObserverWrapper} from "shared/ui/ScrollObserverWrapper";
import {useAppDispatch, useOnUnmount} from "shared/lib/hooks";
import {
    fetchFavoriteCities,
    favoriteCitiesActions,
    selectFavoriteCities,
    selectFavoriteLoadings
} from "entities/Favorites";
import {useSelector} from "react-redux";
import {MediumCard} from "shared/ui/WeatherCard";
import {getItem} from "helpers/localStorage";
import {Page} from "shared/ui/Page";
import {useRef} from "react";
import classNames from "classnames";

interface FavoritePageProps {
    className?: string;
}

const FavoritePage = (props: FavoritePageProps) => {
    const {className} = props;
    const dispatch = useAppDispatch();

    const cities = useSelector(selectFavoriteCities);
    const loadings = useSelector(selectFavoriteLoadings);

    const city_names = getItem<string[]>('favorites');
    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleCityVisible = (city: string) => {
        console.log("Request:", city);
        dispatch(fetchFavoriteCities(city));
    };

    useOnUnmount(() =>  {
        dispatch(favoriteCitiesActions.resetFavoriteState())
    })


    if (!city_names || !city_names.length) {
        return (
            <div>
                <h1>Not Found</h1>
            </div>
        )
    }

    return (
        <Page ref={containerRef} className={classNames(cls['favorite-page'], className)}>
            <ScrollObserverWrapper
                items={city_names}
                getId={(city) => city}
                onItemVisible={handleCityVisible}
                containerRef={containerRef}
            >
                {(city_name ) =>  <MediumCard loading={loadings[city_name]} city={cities[city_name]}/>}
            </ScrollObserverWrapper>
        </Page>
    );
};

export default FavoritePage;