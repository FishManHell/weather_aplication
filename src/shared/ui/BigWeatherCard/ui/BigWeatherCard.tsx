import cls from "./BigWeatherCard.module.scss"
import classNames from "classnames";
import {Card, SvgIcon, Typography} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import TemperatureIcon from "shared/assets/icons/Temperature_.svg";
import {Temperature} from "shared/ui/Temperature";
import {WeatherIcon} from "shared/ui/WeatherIcon";
import {FormattedDate} from "shared/ui/FormattedDate";
import {DATE_FORMATS} from "helpers/time";
import {BigWeatherCardFooter} from "./BigWeatherCardFooter";
import {FavoriteButton} from "shared/ui/FavoriteButton";
import {City} from "entities/Today/model/types/citySchema";
import {useEffect, useState} from "react";
import {getItem, setItem} from "helpers/localStorage";
import {BigWeatherCardSkeleton} from "shared/ui/BigWeatherCard/ui/BigWeatherCardSkeleton";

type Favorite = string

interface BigWeatherCardProps {
    className?: string;
    city?: City;
    loading?: boolean;
}

export const BigWeatherCard = (props: BigWeatherCardProps) => {
    const {className, city, loading} = props;

    const footerClassName = cls["weather-big-card-footer-content"]

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
        const favorite = city?.name && favorites.includes(city?.name);
        setIsFavorite(!!favorite);
    }, [city?.name]);


    if (loading) return <BigWeatherCardSkeleton/>

    return (
        <Card className={classNames(cls["big-weather-card"], className)}>
            <header className={cls["big-weather-card-header"]}>
                <Typography level="h3" className={cls["big-weather-card-header-title"]}>
                    {city?.name}
                    <PlaceIcon/>
                </Typography>
            </header>

            <main className={cls["big-weather-card-main-container"]}>
                <section>
                    <WeatherIcon icon={city?.weather[0].icon} height={90} width={90}/>
                </section>
                <section className={cls['big-weather-card-temp-wrapper']}>
                    <SvgIcon className={cls["temp-wrapper-temp-icon"]}>
                        <TemperatureIcon />
                    </SvgIcon>
                    <Temperature value={Math.round(city?.main?.temp ?? 0)} level={'h1'}/>
                </section>
            </main>

            <FormattedDate
                time={city?.dt}
                format={DATE_FORMATS.SHORT}
                level={"body-md"}
            />
            <footer className={cls["big-weather-card-footer"]}>
                {footerItems.map(({name, value}) => {
                    return (
                        <BigWeatherCardFooter
                            key={name}
                            name={name}
                            value={value}
                            className={footerClassName}
                        />
                    )
                })}
            </footer>
            <FavoriteButton
                onToggleFavorite={onToggleFavorite}
                isFavorite={isFavorite}
            />
        </Card>
    );
};
