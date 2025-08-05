import cls from "./WeatherBigCard.module.scss"
import classNames from "classnames";
import {Card, CardContent, IconButton, SvgIcon, Typography} from "@mui/joy";
import GradeIcon from '@mui/icons-material/Grade';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import PlaceIcon from '@mui/icons-material/Place';
import TemperatureIcon from "shared/assets/icons/Temperature_.svg"
import { BookmarkAdd } from "@mui/icons-material";

interface WeatherBigCardProps {
    className?: string;
}

export const WeatherBigCard = ({className}: WeatherBigCardProps) => {
    return (
        <Card className={classNames(cls["weather-big-card"], className)}>
            <header className={cls["weather-big-card-header"]}>
                <Typography level="h3" className={cls["weather-big-card-header-title"]}>
                    Dnipro
                    <PlaceIcon/>
                </Typography>
            </header>
            <section className={cls['weather-big-card-temp-wrapper']}>
                <div className={cls['temp-wrapper']}>
                    <SvgIcon className={cls["temp-wrapper-temp-icon"]}>
                        <TemperatureIcon />
                    </SvgIcon>
                    <Typography level="h1">27C</Typography>
                    <div className={cls["temp-img-container"]}>
                        <img
                            src="https://openweathermap.org/img/wn/02d.png"
                            alt="weather icon"
                            className={cls["img"]}
                        />
                    </div>
                </div>
            </section>
            <Typography level="body-md">date</Typography>
            <footer className={cls["weather-big-card-footer"]}>
                <div className={cls["weather-big-card-footer-content"]}>
                    <Typography level="body-lg">Humidity</Typography>
                    <Typography level="body-md">99%</Typography>
                </div>
                <div className={cls["weather-big-card-footer-content"]}>
                    <Typography level="body-lg">Visiblity</Typography>
                    <Typography level="body-md">8km</Typography>
                </div>
                <div className={cls["weather-big-card-footer-content"]}>
                    <Typography level="body-lg">Air Pressure</Typography>
                    <Typography level="body-md">1005hPa</Typography>
                </div>
                <div className={cls["weather-big-card-footer-content"]}>
                    <Typography level="body-lg">Wind</Typography>
                    <Typography level="body-md">2mph</Typography>
                </div>
            </footer>
            <IconButton
                className={cls["weather-big-card-fav-btn"]}
                size="lg"
            >
                <GradeOutlinedIcon />
            </IconButton>
        </Card>
    );
};
