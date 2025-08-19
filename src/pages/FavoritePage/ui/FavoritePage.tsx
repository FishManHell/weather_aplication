import cls from "./FavoritePage.module.scss"
import {ScrollObserverWrapper} from "shared/ui/ScrollObserverWrapper";
import {useAppDispatch, useAppSelector, useOnUnmount} from "shared/lib/hooks";
import {
    fetchFavoriteCities,
    favoriteCitiesActions,
    selectFavoriteCities,
} from "entities/Favorites";
import {Favorite, MediumCard} from "shared/ui/WeatherCard";
import {getItem} from "helpers/localStorage";
import {Page} from "shared/ui/Page";
import {useRef} from "react";
import classNames from "classnames";

interface FavoritePageProps {
    className?: string;
}

const FavoritePage = (props: FavoritePageProps) => {
    const {className} = props;
    const ids = getItem<Favorite[]>('favorites') || [];
    const dispatch = useAppDispatch();

    const cities = useAppSelector(state => selectFavoriteCities(state, ids));

    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleCityVisible = (city: string) => {
        console.log("Request:", city);
        dispatch(fetchFavoriteCities(city));
    };

    const onRemoveFavorite = (id: string) => {
        dispatch(favoriteCitiesActions.onRemoveFavoriteCity(id));
    }

    useOnUnmount(() =>  {
        dispatch(favoriteCitiesActions.resetFavoriteState())
    })

    if (!ids || !ids.length) {
        return (
            <div>
                <h1>Not Found</h1>
            </div>
        )
    }

    return (
        <Page ref={containerRef} className={classNames(cls['favorite-page'], className)}>
            <ScrollObserverWrapper
                items={ids}
                getId={(id) => id}
                onItemVisible={handleCityVisible}
                containerRef={containerRef}
            >
                {(id ) =>  {
                    return (
                        <MediumCard
                            loading={cities[id].loading}
                            city={cities[id].city}
                            onRemoveFavorite={onRemoveFavorite}
                        />
                    )
                }}
            </ScrollObserverWrapper>
        </Page>
    );
};

export default FavoritePage;