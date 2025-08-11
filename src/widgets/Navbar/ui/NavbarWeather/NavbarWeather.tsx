import cls from "./NavbarWeather.module.scss"
import classNames from "classnames";
import {Date} from "widgets/Date";
import {useGetWeatherByCityQuery} from "entities/Navbar";
import {useSelector} from "react-redux";
import {selectCurrentLocation, selectCurrentLocationError} from "entities/CurrentLocation";
import {skipToken} from "@reduxjs/toolkit/query";

const DELAY = 60_000

interface NavbarWeatherProps {
    className?: string;
}

export const NavbarWeather = ({className}: NavbarWeatherProps) => {
    const defLocation = useSelector(selectCurrentLocation);
    const defLocationError = useSelector(selectCurrentLocationError);

    const { data: currentCity, error, isLoading } = useGetWeatherByCityQuery(
        defLocation ? {...defLocation, units: "metric"} : skipToken, {pollingInterval: DELAY}
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
                <div className={cls["navbar-weather-header-img-container"]}>
                    <img
                        src={`https://openweathermap.org/img/wn/${currentCity?.weather[0].icon}.png`}
                        alt="weather icon"
                    />
                </div>

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
