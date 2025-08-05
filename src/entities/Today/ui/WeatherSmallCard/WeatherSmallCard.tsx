import cls from "./WeatherSmallCard.module.scss"
import classNames from "classnames";
import {Card, Typography} from "@mui/joy";

interface WeatherSmallCardProps {
    className?: string;
}

export const WeatherSmallCard = ({className}: WeatherSmallCardProps) => {
    return (
        <Card className={classNames(cls["weather-small-card"], className)}>
            <div className={cls["weather-small-card-info-wrapper"]}>
                <Typography className={cls["weather-small-card-info-title"]} level={'title-lg'}>12:00pm</Typography>
                <div className={cls["weather-small-card-info-img-container"]}>
                    <img
                        src="https://openweathermap.org/img/wn/02d.png"
                        alt="weather icon"
                        className={cls["img"]}
                    />
                </div>
                <Typography className={cls["weather-small-card-info-footer"]} level={'title-lg'}>26</Typography>
            </div>
        </Card>
    );
};
