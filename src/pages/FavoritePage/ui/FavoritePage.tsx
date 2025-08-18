import cls from "./FavoritePage.module.scss"
import {ScrollObserverWrapper} from "shared/ui/ScrollObserverWrapper";
import {useAppDispatch, useAppSelector, useOnUnmount} from "shared/lib/hooks";
import {
    fetchFavoriteCities,
    favoriteCitiesActions,
    selectFavoriteCities,
} from "entities/Favorites";
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
    const names = getItem<string[]>('favorites') || [];
    const dispatch = useAppDispatch();

    const cities = useAppSelector(state => selectFavoriteCities(state, names));

    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleCityVisible = (city: string) => {
        console.log("Request:", city);
        dispatch(fetchFavoriteCities(city));
    };

    const onRemoveFavorite = (cityName: string) => {
        dispatch(favoriteCitiesActions.onRemoveFavoriteCity(cityName));
    }

    useOnUnmount(() =>  {
        dispatch(favoriteCitiesActions.resetFavoriteState())
    })


    if (!names || !names.length) {
        return (
            <div>
                <h1>Not Found</h1>
            </div>
        )
    }

    return (
        <Page ref={containerRef} className={classNames(cls['favorite-page'], className)}>
            <ScrollObserverWrapper
                items={names}
                getId={(city) => city}
                onItemVisible={handleCityVisible}
                containerRef={containerRef}
            >
                {(city_name ) =>  {
                    return (
                        <MediumCard
                            loading={cities[city_name].loading}
                            city={cities[city_name].city}
                            onRemoveFavorite={onRemoveFavorite}
                        />
                    )
                }}
            </ScrollObserverWrapper>
        </Page>
    );
};

export default FavoritePage;