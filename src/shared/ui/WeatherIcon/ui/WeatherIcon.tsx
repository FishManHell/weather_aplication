import cls from "./WeatherIcon.module.scss"
import classNames from "classnames";

interface WeatherIconProps {
    className?: string;
    icon?: string;
    width?: number;
    height?: number;
}

export const WeatherIcon = (props: WeatherIconProps) => {
    const {className, icon, width, height} = props;
    return (
        <div className={classNames(cls["weather-icon"], className)} style={{width: `${width}px`, height: `${height}px`}}>
            <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="weather icon"/>
        </div>
    );
};
