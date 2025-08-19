import cls from "./NavbarWeather.module.scss"
import classNames from "classnames";
import {Date} from "widgets/Date";
import {useGetWeatherByCityQuery} from "entities/Weather";
import {selectCurrentLocation, selectCurrentLocationError} from "entities/CurrentLocation";
import {skipToken} from "@reduxjs/toolkit/query";
import {WeatherIcon} from "shared/ui/WeatherIcon";
import {useAppSelector} from "shared/lib/hooks";

const DELAY = 60_000

interface NavbarWeatherProps {
    className?: string;
}

export const NavbarWeather = ({className}: NavbarWeatherProps) => {
    const defLocation = useAppSelector(selectCurrentLocation);
    const defLocationError = useAppSelector(selectCurrentLocationError);

    const { data: currentCity } = useGetWeatherByCityQuery(
        defLocation ? defLocation : skipToken, {pollingInterval: DELAY}
    );

    const NavbarWeatherHeader = () => {
        if (defLocationError) {
            return (
                <header className={cls['navbar-weather-header']}>
                    <h1 className={cls['navbar-weather-header-error-title']}>
                        Location access denied
                    </h1>
                </header>
            )
        }

        return (
            <header className={cls['navbar-weather-header']}>
                <WeatherIcon icon={currentCity?.weather[0].icon} width={50} height={50}/>
                <h1 className={cls['navbar-weather-header-title']}>{currentCity?.name}</h1>
            </header>
        )
    };

    return (
        <div className={classNames(cls["navbar-weather"], className)}>
            <NavbarWeatherHeader/>
            <Date className={cls['navbar-weather-info-date']} delay={DELAY}/>
        </div>
    );
};
