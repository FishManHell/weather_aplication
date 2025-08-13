import cls from "./SmallWeatherCard.module.scss"
import classNames from "classnames";
import {Card, Skeleton} from "@mui/material";

interface SmallWeatherCardSkeletonProps {
    className?: string;
}

export const SmallWeatherCardSkeleton = ({className}: SmallWeatherCardSkeletonProps) => {
    return (
        <Card className={classNames(cls["small-weather-card"], className)}>
            <div className={cls["small-weather-card-info-wrapper"]}>
                <Skeleton variant="text" sx={{ fontSize: '0.6rem'}}/>
                <Skeleton variant="circular" width={50} height={50} sx={{margin: '5px 0'}}/>
                <Skeleton variant="text" sx={{ fontSize: '0.6rem'}}/>
            </div>
        </Card>
    );
};
