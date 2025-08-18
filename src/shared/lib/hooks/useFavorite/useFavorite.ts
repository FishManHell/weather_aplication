import {useCallback, useEffect, useState} from "react";
import {getItem, setItem} from "helpers/localStorage";
import {Favorite} from "shared/ui/WeatherCard";

type FavoriteRemoveCallback = (cityName: string) => void;

export const useFavorite = (cityName?: string, onRemove?: FavoriteRemoveCallback) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const favorites = getItem<Favorite[]>("favorites") || [];


    const subscribe = useCallback(() => {
        if (!cityName) return;

        setIsFavorite(true);
        if (!favorites.includes(cityName)) {
            const updated = [...favorites, cityName];
            setItem("favorites", updated);
        }
    }, [cityName, favorites]);


    const unSubscribe = useCallback(() => {
        if (!cityName) return;

        setIsFavorite(false);

        const updated = favorites.filter((fav) => fav !== cityName);
        setItem("favorites", updated);
        onRemove?.(cityName);
    }, [cityName, favorites, onRemove]);


    useEffect(() => {
        if (!cityName) return;
        setIsFavorite(favorites.includes(cityName));
    }, [cityName]);

    return { isFavorite, subscribe, unSubscribe };
}