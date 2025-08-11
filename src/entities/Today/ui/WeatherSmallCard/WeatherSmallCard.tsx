import cls from "./WeatherSmallCard.module.scss"
import classNames from "classnames";
import {Card} from "@mui/joy";
import {OneCallWeatherHourly} from "entities/Today";
import {Temperature} from "shared/ui/Temperature";
import {memo} from "react";
import {WeatherIcon} from "shared/ui/WeatherIcon";
import {FormattedDate} from "shared/ui/FormattedDate";
import {DATE_FORMATS} from "helpers/time";

interface WeatherSmallCardProps {
    className?: string;
    hourlyData: OneCallWeatherHourly
}

export const WeatherSmallCard = memo((props: WeatherSmallCardProps) => {
    const {className, hourlyData} = props

    return (
        <Card className={classNames(cls["weather-small-card"], className)}>
            <div className={cls["weather-small-card-info-wrapper"]}>
                <FormattedDate
                    time={hourlyData.dt}
                    format={DATE_FORMATS.TIME}
                    level={'title-lg'}
                    className={cls["weather-small-card-info-title"]}
                />
                <WeatherIcon icon={hourlyData.weather[0].icon} height={60} width={60}/>
                <Temperature
                    className={cls["weather-small-card-info-footer"]}
                    level={'title-lg'}
                    value={hourlyData?.temp}
                />
            </div>
        </Card>
    );
});
