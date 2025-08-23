import cls from "./NavbarWeather.module.scss"
import classNames from "classnames";
import {Date} from "widgets/Date";
import {useGetWeatherByCityQuery} from "entities/Weather";
import {selectCurrentLocation, selectCurrentLocationError} from "entities/CurrentLocation";
import {skipToken} from "@reduxjs/toolkit/query";
import {WeatherIcon} from "shared/ui/WeatherIcon";
import {useAppSelector} from "shared/lib/hooks";
import {CustomTypography} from "shared/ui/CustomTypography";
import {selectTemperatureUnit} from "shared/ui/UnitSwitcher";

const DELAY = 60_000

interface NavbarWeatherProps {
    className?: string;
}

export const NavbarWeather = ({className}: NavbarWeatherProps) => {
    const coordinates = useAppSelector(selectCurrentLocation);
    const errorCoordinates = useAppSelector(selectCurrentLocationError);
    const units = useAppSelector(selectTemperatureUnit);

    const shouldFetch = coordinates && !errorCoordinates;

    const { data: currentCity } = useGetWeatherByCityQuery(
        shouldFetch ? {...coordinates, units} : skipToken,
        {pollingInterval: DELAY}
    );

    const NavbarWeatherHeader = () => {
        if (errorCoordinates) {
            return (
                <header className={cls['navbar-weather-header']}>
                    <CustomTypography
                        className={cls['navbar-weather-header-error-title']}
                        level={'h1'}
                        sx={{color: "#d50000"}}
                        responsiveSizes={{ h1: "clamp(30px, 5vw, 35px)" }}
                    >
                        Location denied
                    </CustomTypography>
                </header>
            )
        }

        return (
            <header className={cls['navbar-weather-header']}>
                <WeatherIcon icon={currentCity?.weather[0].icon} width={50} height={50}/>
                <CustomTypography level={'h1'} responsiveSizes={{ h1: "clamp(35px, 5vw, 60px)" }} inverse>
                    {currentCity?.name}
                </CustomTypography>
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
