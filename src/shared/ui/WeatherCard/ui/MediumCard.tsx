import {WeatherCardProps, WeatherCardSize} from "../model/types";
import {WeatherCard} from "./WeatherCard/WeatherCard";

export const MediumCard = (props: Omit<WeatherCardProps, "size">) => (
    <WeatherCard {...props} size={WeatherCardSize.MEDIUM} />
);