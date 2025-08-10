import cls from "./WeatherBigCard.module.scss"
import classNames from "classnames";
import {Card, CardContent, IconButton, SvgIcon, Typography} from "@mui/joy";
import GradeIcon from '@mui/icons-material/Grade';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import PlaceIcon from '@mui/icons-material/Place';
import TemperatureIcon from "shared/assets/icons/Temperature_.svg"
import { BookmarkAdd } from "@mui/icons-material";
import {City} from "../../model/types/citySchema";
import {Temperature} from "shared/ui/Temperature";

interface WeatherBigCardProps {
    className?: string;
    city?: City
}


interface FooterContentItemProps {
    className?: string;
    name: string;
    value: string
}

const FooterContentItem = (props: FooterContentItemProps) => {
    const {value, name, className} = props
    return (
        <div className={cls["weather-big-card-footer-content"]}>
            <Typography level="body-lg">{name}</Typography>
            <Typography level="body-md">{value}</Typography>
        </div>
    )
}

export const WeatherBigCard = (props: WeatherBigCardProps) => {
    const {className, city} = props;

    const timestamp = city?.dt;
    const date = timestamp ? new Date(timestamp * 1000) : null;

    const img = `https://openweathermap.org/img/wn/${city?.weather[0].icon}.png`;


    return (
        <Card className={classNames(cls["weather-big-card"], className)}>
            <header className={cls["weather-big-card-header"]}>
                <Typography level="h3" className={cls["weather-big-card-header-title"]}>
                    {city?.name}
                    <PlaceIcon/>
                </Typography>
            </header>
            <section className={cls['weather-big-card-temp-wrapper']}>
                <div className={cls['temp-wrapper']}>
                    <SvgIcon className={cls["temp-wrapper-temp-icon"]}>
                        <TemperatureIcon />
                    </SvgIcon>
                    <Temperature value={Math.round(city?.main?.temp ?? 0)}  level={'h1'}/>
                    <div className={cls["temp-img-container"]}>
                        <img
                            src={img}
                            alt="weather icon"
                            className={cls["img"]}
                        />
                    </div>
                </div>
            </section>
            <Typography level="body-md">{date?.toLocaleDateString()}</Typography>
            <footer className={cls["weather-big-card-footer"]}>
                <FooterContentItem name={'Humidity'} value={`${city?.main.humidity}%`}/>
                <FooterContentItem name={'Visibility'} value={`${(city?.visibility ?? 0) / 1000}km`}/>
                <FooterContentItem name={'Air Pressure'} value={`${city?.main.pressure}hPa`}/>
                <FooterContentItem name={'Wind'} value={`${((city?.wind?.speed ?? 0) * 2.23694).toFixed(1)}mph`}/>
            </footer>
            <IconButton
                className={cls["weather-big-card-fav-btn"]}
                size="lg"
                sx={{
                    position: 'absolute',
                    top: '0.875rem',
                    right: '0.5rem',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        transform: 'scale(1.1)',
                        transition: 'all 0.3s linear'
                    }
                }}
            >
                <GradeOutlinedIcon />
            </IconButton>
        </Card>
    );
};
