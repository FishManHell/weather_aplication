import classNames from "classnames";
import {Typography} from "@mui/material";

interface FooterContentItemProps {
    className?: string;
    name: string;
    value: string
}

export const WeatherCardFooterItem = (props: FooterContentItemProps) => {
    const {value, name, className} = props
    return (
        <div className={classNames("big-weather-card-footer", className)}>
            <Typography level="body-lg">{name}</Typography>
            <Typography level="body-md">{value}</Typography>
        </div>
    )
};
