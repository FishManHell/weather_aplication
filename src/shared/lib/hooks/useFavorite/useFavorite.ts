import {useCallback, useEffect, useState} from "react";
import {getItem, setItem} from "helpers/localStorage";
import {Favorite} from "shared/ui/WeatherCard";

type FavoriteRemoveCallback = (id: Favorite) => void;

export const useFavorite = (id: Favorite, onRemove?: FavoriteRemoveCallback) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const favorites = getItem<Favorite[]>("favorites") || [];


    const subscribe = useCallback(() => {
        if (!id) return;

        setIsFavorite(true);

        if (!favorites.includes(id)) {
            const updated = [...favorites, id];
            setItem("favorites", updated);
        }
    }, [id, favorites]);


    const unSubscribe = useCallback(() => {
        if (!id) return;

        setIsFavorite(false);

        const updated = favorites.filter(favorite => favorite !== id);
        setItem("favorites", updated);
        onRemove?.(id);
    }, [id, favorites, onRemove]);


    useEffect(() => {
        if (!id) return;
        setIsFavorite(favorites.includes(id));
    }, [id]);

    return { isFavorite, subscribe, unSubscribe };
}