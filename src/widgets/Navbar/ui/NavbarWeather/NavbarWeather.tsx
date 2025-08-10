import cls from "./NavbarWeather.module.scss"
import classNames from "classnames";
import {Date} from "widgets/Date";
import {useGetWeatherByCityQuery} from "entities/Navbar";
import {useSelector} from "react-redux";
import {selectCurrentLocation} from "entities/CurrentLocation";
import {skipToken} from "@reduxjs/toolkit/query";

const DELAY = 60_000

interface NavbarWeatherProps {
    className?: string;
}

export const NavbarWeather = ({className}: NavbarWeatherProps) => {
    const defLocation = useSelector(selectCurrentLocation);

    const { data: currentCity, error, isLoading } = useGetWeatherByCityQuery(
        defLocation ? {...defLocation, units: "metric"} : skipToken, {pollingInterval: DELAY}
    );

    return (
        <div className={classNames(cls["navbar-weather"], className)}>
            <header className={cls['navbar-weather-header']}>
                <img
                    src={`https://openweathermap.org/img/wn/${currentCity?.weather[0].icon}.png`}
                    alt="weather icon"
                />
            </header>
            <section className={cls['navbar-weather-info']}>
                <h1>{currentCity?.name}</h1>
                <Date className={cls['navbar-weather-info-date']} delay={DELAY}/>
            </section>
        </div>
    );
};
