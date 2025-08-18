import cls from "./HourlyCard.module.scss"
import classNames from "classnames";
import {Card} from "@mui/joy";
import {OneCallWeatherHourly} from "entities/Today";
import {Temperature} from "shared/ui/Temperature";
import {memo} from "react";
import {WeatherIcon} from "shared/ui/WeatherIcon";
import {FormattedDate} from "shared/ui/FormattedDate";
import {DATE_FORMATS} from "helpers/time";

interface SmallWeatherCardProps {
    className?: string;
    hourlyData: OneCallWeatherHourly;
    loading?: boolean;
}

export const HourlyCard = memo((props: SmallWeatherCardProps) => {
    const {className, hourlyData} = props;

    return (
        <Card className={classNames(cls["small-weather-card"], className)}>
            <div className={cls["small-weather-card-info-wrapper"]}>
                <FormattedDate
                    time={hourlyData.dt}
                    format={DATE_FORMATS.TIME}
                    level={'title-lg'}
                    className={cls["small-weather-card-info-title"]}
                />
                <WeatherIcon icon={hourlyData.weather[0].icon} height={60} width={60}/>
                <Temperature
                    className={cls["small-weather-card-info-footer"]}
                    level={'title-lg'}
                    value={hourlyData?.temp}
                />
            </div>
        </Card>
    );
});
