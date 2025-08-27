import {WeatherCard} from "./WeatherCard/WeatherCard";
import {WeatherCardProps, WeatherCardSize} from "../model/types";

export const BigCard = (props: Omit<WeatherCardProps, "size">) => (
    <WeatherCard {...props} size={WeatherCardSize.BIG} />
);