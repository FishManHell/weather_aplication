import cls from "./TodayPage.module.scss"
import classNames from "classnames";
import {Search} from "widgets/Search/ui/Search";
import {useAppDispatch} from "shared/lib/hooks";
import {
    fetchCityPosition,
    selectCity,
    selectCityLoading,
    selectHourlyByCoords,
    selectHourlyByCoordsLoading
} from "entities/Today";
import {useSelector} from "react-redux";
import {useEffect, useMemo} from "react";
import {fetchWeatherByCurrentLocation} from "entities/Navbar/model/api/fetchWeatherByCurrentLocation"; // need the same in Today
import {selectCurrentLocation} from "entities/CurrentLocation";
import {BigWeatherCard} from "shared/ui/BigWeatherCard";
import {SmallWeatherCard, SmallWeatherCardSkeleton} from "shared/ui/SmallWeatherCard";

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
        localStorage.setItem("city", city);
    }

    const renderDataOrLoading = useMemo(() => {
        if (hourlyLoading && !hourly?.length) {
            return Array.from({ length: 8 }, (_, i) => (
                <SmallWeatherCardSkeleton key={i} />
            ));
        }

        if (!hourlyLoading && hourly?.length) {
            return hourly.map((hour) => (
                <SmallWeatherCard hourlyData={hour} key={hour.dt} />
            ));
        }

        return null;
    }, [hourlyLoading, hourly])

    useEffect(() => {
        const city = localStorage.getItem('city') || weatherByCurrentLocation?.data?.name;
        if (!city) return
        dispatch(fetchCityPosition(city));
    }, [weatherByCurrentLocation?.data]);

    return (
        <div className={classNames(cls["today-page"], className)}>
            <Search onSearch={onFetchCityCoordinates} />
            <BigWeatherCard city={location} loading={locationLoading}/>

            <section style={{display: "flex", justifyContent: "space-around", width: "100%", marginTop: "20px"}}>
                {renderDataOrLoading}
            </section>
        </div>
    );
};


export default TodayPage;