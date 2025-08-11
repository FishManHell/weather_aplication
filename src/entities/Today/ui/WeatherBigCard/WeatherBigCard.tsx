import cls from "./WeatherBigCard.module.scss"
import classNames from "classnames";
import {Card, SvgIcon, Typography} from "@mui/joy";
import PlaceIcon from '@mui/icons-material/Place';
import TemperatureIcon from "shared/assets/icons/Temperature_.svg"
import {City} from "../../model/types/citySchema";
import {Temperature} from "shared/ui/Temperature";
import {FavoriteButton} from "shared/ui/FavoriteButton";
import {memo, useEffect, useState} from "react";
import {getItem, setItem} from "helpers/localStorage";
import {WeatherIcon} from "shared/ui/WeatherIcon";
import {FooterContentItem} from "../FooterContentItem/FooterContentItem";
import {DATE_FORMATS} from "helpers/time";
import {FormattedDate} from "shared/ui/FormattedDate";

type Favorite = string

interface WeatherBigCardProps {
    className?: string;
    city?: City
}

export const WeatherBigCard = memo((props: WeatherBigCardProps) => {
    const {className, city} = props;
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

    return (
        <Card className={classNames(cls["weather-big-card"], className)}>
            <header className={cls["weather-big-card-header"]}>
                <Typography level="h3" className={cls["weather-big-card-header-title"]}>
                    {city?.name}
                    <PlaceIcon/>
                </Typography>
            </header>
            <section className={cls['weather-big-card-temp-wrapper']}>
                <div className={cls['temp-wrapper']}>
                    <SvgIcon className={cls["temp-wrapper-temp-icon"]}>
                        <TemperatureIcon />
                    </SvgIcon>
                    <Temperature value={Math.round(city?.main?.temp ?? 0)} level={'h1'}/>
                    <WeatherIcon icon={city?.weather[0].icon} height={90} width={90}/>
                </div>
            </section>
            <FormattedDate
                time={city?.dt}
                format={DATE_FORMATS.SHORT}
                level={"body-md"}
            />
            <footer className={cls["weather-big-card-footer"]}>
                {footerItems.map(({name, value}) => {
                  return (
                      <FooterContentItem
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
});
