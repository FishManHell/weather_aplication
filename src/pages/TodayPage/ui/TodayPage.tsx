import cls from "./TodayPage.module.scss"
import classNames from "classnames";
import {WeatherBigCard} from "entities/Today/ui/WeatherBigCard/WeatherBigCard";
import {WeatherSmallCard} from "entities/Today/ui/WeatherSmallCard/WeatherSmallCard";
import {Search} from "widgets/Search/ui/Search";
import {useAppDispatch} from "shared/lib/hooks";
import {fetchCityPosition} from "entities/Today/model/services/fetchCityPosition";
import {useSelector} from "react-redux";
import {selectCity} from "entities/Today/model/selectors/citySelectors";
import {selectHourlyByCoords} from "entities/Today/model/selectors/hourlyWeatherByCoordSelectors";
import {useEffect} from "react";
import {fetchWeatherByCurrentLocation} from "entities/Navbar/model/api/fetchWeatherByCurrentLocation";
import {selectCurrentLocation} from "entities/CurrentLocation/model/selectors/currentLocation";

interface TodayPageProps {
    className?: string;
}

const TodayPage = ({className}: TodayPageProps) => {
    const dispatch = useAppDispatch();
    const location = useSelector(selectCity);
    const hourly = useSelector(selectHourlyByCoords);
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

    useEffect(() => {
        const city = localStorage.getItem('city') || weatherByCurrentLocation?.data?.name;
        if (!city) return
        dispatch(fetchCityPosition(city));
    }, [weatherByCurrentLocation?.data]);

    return (
        <div className={classNames(cls["today-page"], className)}>
            <Search onSearch={onFetchCityCoordinates} />
            <WeatherBigCard city={location}/>

            <section style={{display: "flex", justifyContent: "space-around", width: "100%", marginTop: "20px"}}>
                {hourly?.map((hour) => {
                    return <WeatherSmallCard hourlyData={hour} key={hour.dt}/>
                })}
            </section>

        </div>
    );
};


export default TodayPage;