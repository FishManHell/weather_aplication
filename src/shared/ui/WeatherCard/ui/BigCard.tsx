import {WeatherCard} from "../ui/WeatherCard";
import {WeatherCardProps, WeatherCardSize} from "../model/types/types";

export const BigCard = (props: Omit<WeatherCardProps, "size">) => (
    <WeatherCard {...props} size={WeatherCardSize.BIG} />
);