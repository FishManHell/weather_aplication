import {WeatherCardProps, WeatherCardSize} from "../model/types/types";
import {WeatherCard} from "../ui/WeatherCard";

export const MediumCard = (props: Omit<WeatherCardProps, "size">) => (
    <WeatherCard {...props} size={WeatherCardSize.MEDIUM} />
);