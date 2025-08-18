import cls from "./BigWeatherCard.module.scss"
import classNames from "classnames";
import {Card, SvgIcon, Typography} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import TemperatureIcon from "shared/assets/icons/Temperature_.svg";
import {Temperature} from "shared/ui/Temperature";
import {WeatherIcon} from "shared/ui/WeatherIcon";
import {FormattedDate} from "shared/ui/FormattedDate";
import {DATE_FORMATS} from "helpers/time";
import {WeatherCardFooterItem} from "./WeatherCardFooterItem";
import {FavoriteButton} from "shared/ui/FavoriteButton";
import {useEffect, useState} from "react";
import {getItem, setItem} from "helpers/localStorage";
import {WeatherCardSkeleton} from "./WeatherCardSkeleton";
import {WeatherCardSize, Favorite, WeatherCardProps} from "../model/types/types";

export const WeatherCard = (props: WeatherCardProps) => {
    const {className, city, loading, size = WeatherCardSize.BIG} = props;

    const footerClassName = cls["weather-card-footer-content"]

    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const favorites = getItem<Favorite[]>("favorites");

    const cityName = city?.name;

    const footerItems: Record<string, string>[] = [
        { name: 'Humidity', value: `${city?.main.humidity}%`},
        { name: 'Visibility', value: `${(city?.visibility ?? 0) / 1000}km`},
        { name: 'Air Pressure', value: `${city?.main.pressure}hPa` },
        { name: 'Wind', value: `${((city?.wind?.speed ?? 0) * 2.23694).toFixed(1)}mph`},
    ];

    const onSubscribe = () => {
        if (!cityName) return;

        setIsFavorite(true);
        if (!favorites) setItem('favorites', [cityName]);
        else {
            if (!favorites.includes(cityName)) {
                setItem('favorites', [...favorites, cityName])
            }
        }
    }

    const onUnSubscribe = () => {
        if (!cityName || !favorites) return;
        setIsFavorite(false)
        setItem('favorites', favorites.filter(fav => fav !== cityName))
    }

    const onToggleFavorite = () => !isFavorite ? onSubscribe() : onUnSubscribe();

    useEffect(() => {
        if (!favorites) return
        const favorite = cityName && favorites.includes(cityName);
        setIsFavorite(!!favorite);
    }, [cityName]);


    if (loading) return <WeatherCardSkeleton size={size}/>

    return (
        <Card className={classNames(cls["weather-card"], className, cls[size])}>
            <header className={cls["weather-card-header"]}>
                <Typography level="h3" className={cls["weather-card-header-title"]}>
                    {city?.name}
                    <PlaceIcon/>
                </Typography>
            </header>

            <main className={cls["weather-card-main-container"]}>
                <section>
                    <WeatherIcon icon={city?.weather[0].icon} height={90} width={90}/>
                </section>
                <section className={cls['weather-card-temp-wrapper']}>
                    <SvgIcon className={cls["temp-wrapper-temp-icon"]}>
                        <TemperatureIcon />
                    </SvgIcon>
                    <Temperature value={Math.round(city?.main?.temp ?? 0)} level={'h1'}/>
                </section>
            </main>

            <FormattedDate time={city?.dt} format={DATE_FORMATS.SHORT} level={"body-md"}/>
            <footer className={cls["weather-card-footer"]}>
                {footerItems.map(({name, value}) => {
                    return (
                        <WeatherCardFooterItem
                            key={name}
                            name={name}
                            value={value}
                            className={footerClassName}
                        />
                    )
                })}
            </footer>
            <FavoriteButton onToggleFavorite={onToggleFavorite} isFavorite={isFavorite}/>
        </Card>
    );
};
