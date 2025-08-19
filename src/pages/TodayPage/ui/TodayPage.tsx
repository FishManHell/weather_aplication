import cls from "./TodayPage.module.scss"
import classNames from "classnames";
import {Search} from "widgets/Search/ui/Search";
import {useAppDispatch, useAppSelector, useOnUnmount} from "shared/lib/hooks";
import {
    cityActions,
    fetchCityPosition,
    hourlyWeatherByCoordsActions,
    selectCity,
    selectCityLoading,
    selectHourlyByCoords,
    selectHourlyByCoordsLoading
} from "entities/Today";
import {useEffect, useRef} from "react";
import {fetchWeatherByCurrentLocation} from "entities/Weather";
import {selectCurrentLocation} from "entities/CurrentLocation";
import {BigCard} from "shared/ui/WeatherCard";
import {HourlyCardsWrapper} from "shared/ui/HourlyCard";
import {Page} from "shared/ui/Page";
import {getItem} from "helpers/localStorage";

interface TodayPageProps {
    className?: string;
}

const TodayPage = ({className}: TodayPageProps) => {
    const dispatch = useAppDispatch();
    const location = useAppSelector(selectCity);
    const locationLoading = useAppSelector(selectCityLoading);
    const hourly = useAppSelector(selectHourlyByCoords);
    const hourlyLoading = useAppSelector(selectHourlyByCoordsLoading);
    const defLocation = useAppSelector(selectCurrentLocation);

    const isInitialized = useRef(false);

    const weatherByCurrentLocation = useAppSelector(
        defLocation
            ? fetchWeatherByCurrentLocation.endpoints?.getWeatherByCity.select(defLocation)
            : () => undefined
    );

    const onFetchCityCoordinates = (city: string) => {
        dispatch(fetchCityPosition(city));
    }

    const onUnmountDispatches = () => {
        dispatch(cityActions.resetCityState());
        dispatch(hourlyWeatherByCoordsActions.resetHourlyWeatherByCoordsState())
    }

    useEffect(() => {
        if (isInitialized.current) return;

        const city = getItem<string>("city") || weatherByCurrentLocation?.data?.name;

        if (!city) return;
        isInitialized.current = true;

        dispatch(fetchCityPosition(city));
    }, [dispatch, weatherByCurrentLocation?.data?.name]);

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