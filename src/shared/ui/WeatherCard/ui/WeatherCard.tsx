import cls from "./WeatherCard.module.scss"
import classNames from "classnames";
import {Card, SvgIcon, Typography} from "@mui/joy";
import PlaceIcon from "@mui/icons-material/Place";
import TemperatureIcon from "shared/assets/icons/Temperature_.svg";
import {Temperature} from "shared/ui/Temperature";
import {WeatherIcon} from "shared/ui/WeatherIcon";
import {FormattedDate} from "shared/ui/FormattedDate";
import {DATE_FORMATS} from "helpers/time";
import {WeatherCardFooterItem} from "./WeatherCardFooterItem";
import {FavoriteButton} from "shared/ui/FavoriteButton";
import {WeatherCardSkeleton} from "./WeatherCardSkeleton";
import {WeatherCardSize, WeatherCardProps} from "../model/types/types";
import {useFavorite} from "shared/lib/hooks";
import {memo, useCallback, useState} from "react";
import {Toast} from "shared/ui/Toast";

export const WeatherCard = memo((props: WeatherCardProps) => {
    const {className, city, loading, size = WeatherCardSize.BIG, onRemoveFavorite} = props;
    const [isOpenToast, setIsOpenToast] = useState<boolean>(false);

    const footerClassName = cls["weather-card-footer-content"];

    const {isFavorite, unSubscribe, subscribe} = useFavorite(String(city?.id), onRemoveFavorite);

    const footerItems: Record<string, string>[] = [
        { name: 'Humidity', value: `${city?.main.humidity}%`},
        { name: 'Visibility', value: `${(city?.visibility ?? 0) / 1000}km`},
        { name: 'Air Pressure', value: `${city?.main.pressure}hPa` },
        { name: 'Wind', value: `${((city?.wind?.speed ?? 0) * 2.23694).toFixed(1)}mph`},
    ];

    const handleFavoriteToggle = () => {
        if (!isFavorite) {
            setIsOpenToast(true)
            subscribe()
        } else {
            unSubscribe()
        }
    };

    const onCloseToast = useCallback(() => setIsOpenToast(false), [])

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
            <FavoriteButton
                handleFavoriteToggle={handleFavoriteToggle}
                isFavorite={isFavorite}
            />
            <Toast
                open={isOpenToast}
                onClose={onCloseToast}
                message={"City was just added to favorites"}
                duration={1500}
            />
        </Card>
    );
});
