import cls from "./WeatherSmallCard.module.scss"
import classNames from "classnames";
import {Card, Typography} from "@mui/joy";
import {OneCallWeatherHourly} from "entities/Today";
import {Temperature} from "shared/ui/Temperature";

interface WeatherSmallCardProps {
    className?: string;
    hourlyData: OneCallWeatherHourly
}
type UnixTimestamp = number;

const addZero = (numb: number): string | number => numb <= 9 ? `0${numb}` : numb;

const modifDate = (timestamp: UnixTimestamp) => {
    if (!timestamp) return null;

    const d = new Date(timestamp);
    const hour = addZero(d.getHours());
    const minute = addZero(d.getMinutes());

    return `${hour}:${minute}`;
}

export const WeatherSmallCard = (props: WeatherSmallCardProps) => {
    const {className, hourlyData} = props

    const img = `https://openweathermap.org/img/wn/${hourlyData.weather[0].icon}.png`;

    const timestamp = hourlyData?.dt;
    const date = modifDate(timestamp * 1000);

    return (
        <Card className={classNames(cls["weather-small-card"], className)}>
            <div className={cls["weather-small-card-info-wrapper"]}>
                <Typography className={cls["weather-small-card-info-title"]} level={'title-lg'}>{date?.toLocaleString()}</Typography>
                <div className={cls["weather-small-card-info-img-container"]}>
                    <img
                        src={img}
                        alt="weather icon"
                        className={cls["img"]}
                    />
                </div>
                <Temperature
                    className={cls["weather-small-card-info-footer"]}
                    level={'title-lg'}
                    value={hourlyData?.temp}
                />
            </div>
        </Card>
    );
};
