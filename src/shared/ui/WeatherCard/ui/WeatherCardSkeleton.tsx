import cls from "./BigWeatherCard.module.scss"
import classNames from "classnames";
import {Card, Skeleton} from "@mui/material";
import {Box} from "@mui/joy";
import {WeatherCardSize} from "../model/types/types";

interface BigWeatherCardSkeletonProps {
    className?: string;
    size?: WeatherCardSize
}

export const WeatherCardSkeleton = (props: BigWeatherCardSkeletonProps) => {
    const {className, size = WeatherCardSize.BIG} = props;

    return (
        <Card className={classNames(cls["weather-card"], cls[size], className)}>
            <Skeleton variant="text" width="50%" height={32} />
            <Box display="flex" justifyContent="center" my={2} alignItems="center">
                <Skeleton variant="circular" width={90} height={90} />
            </Box>
            <Skeleton variant="rectangular" width="60%" height={30} sx={{ mx: "auto" }} />
            <Skeleton variant="text" width="50%" height={28} sx={{ mr: "auto" }} />
            <Box display="flex" justifyContent="center" my={2}>
                {[...Array(4)].map((_, i) => (
                    <Box key={i} width={'100%'} display="flex" flexDirection={'column'} alignItems={'center'}>
                        <Skeleton variant="text" width="80%" />
                        <Skeleton variant="text" width="60%"/>
                    </Box>
                ))}
            </Box>
            <Box position={'absolute'} top={'0.875rem'} right={'0.5rem'}>
                <Skeleton variant="circular" width={25} height={25} />
            </Box>
        </Card>
    );
};
