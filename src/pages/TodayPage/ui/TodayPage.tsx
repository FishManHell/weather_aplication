import cls from "./TodayPage.module.scss"
import classNames from "classnames";
import {Search} from "widgets/Search/ui/Search";
import {useAppDispatch, useOnUnmount} from "shared/lib/hooks";
import {
    cityActions,
    fetchCityPosition,
    hourlyWeatherByCoordsActions,
    selectCity,
    selectCityLoading,
    selectHourlyByCoords,
    selectHourlyByCoordsLoading
} from "entities/Today";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchWeatherByCurrentLocation} from "entities/Weather";
import {selectCurrentLocation} from "entities/CurrentLocation";
import {BigCard} from "shared/ui/WeatherCard";
import {HourlyCardsWrapper} from "shared/ui/HourlyCard";
import {Page} from "shared/ui/Page";
import {setItem} from "helpers/localStorage";

interface TodayPageProps {
    className?: string;
}

const TodayPage = ({className}: TodayPageProps) => {
    const dispatch = useAppDispatch();
    const location = useSelector(selectCity);
    const locationLoading = useSelector(selectCityLoading);
    const hourly = useSelector(selectHourlyByCoords);
    const hourlyLoading = useSelector(selectHourlyByCoordsLoading);
    const defLocation = useSelector(selectCurrentLocation);

    const weatherByCurrentLocation = useSelector(
        defLocation
            ? fetchWeatherByCurrentLocation.endpoints?.getWeatherByCity.select(
                {...defLocation, units: "metric"}
            )
            : () => undefined
    );

    const onFetchCityCoordinates = (city: string) => {
        dispatch(fetchCityPosition(city));
        setItem('city', city);
    }

    const onUnmountDispatches = () => {
        dispatch(cityActions.resetCityState());
        dispatch(hourlyWeatherByCoordsActions.resetHourlyWeatherByCoordsState())
    }

    useEffect(() => {
        const city = localStorage.getItem('city') || weatherByCurrentLocation?.data?.name;
        if (!city) return
        dispatch(fetchCityPosition(city));
    }, [weatherByCurrentLocation?.data]);

    useOnUnmount(() => onUnmountDispatches())

    return (
        <Page className={classNames(cls["today-page"], className)}>
            <Search onSearch={onFetchCityCoordinates} />
            <BigCard city={location} loading={locationLoading} />

            <section className={cls['today-page-hourly-container']}>
                <HourlyCardsWrapper data={hourly} loading={hourlyLoading}/>
            </section>
        </Page>
    );
};


export default TodayPage;