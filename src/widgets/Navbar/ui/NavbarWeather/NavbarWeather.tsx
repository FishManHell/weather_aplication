import cls from "./NavbarWeather.module.scss"
import classNames from "classnames";
import {Date} from "widgets/Date";
import {useGetGeolocation} from "shared/lib/hooks";
import {useGetWeatherByCityQuery} from "entities/Navbar/model/api/fetchWeatherByCurrentLocation";
import { skipToken } from '@reduxjs/toolkit/query';


interface NavbarWeatherProps {
    className?: string;
}

export const NavbarWeather = ({className}: NavbarWeatherProps) => {
    const positions = useGetGeolocation();
    console.log(positions, "positions")
    const { data: currentCity, error, isLoading } = useGetWeatherByCityQuery(
        positions ? {...positions, units: "metric"} : skipToken,

        // {pollingInterval: 1000}
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
                <h1>Weather</h1>
                <Date className={cls['navbar-weather-info-date']} />
            </section>
        </div>
    );
};
