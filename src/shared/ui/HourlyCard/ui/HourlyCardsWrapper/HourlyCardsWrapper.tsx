import {OneCallWeatherHourly} from "entities/Today";
import {HourlyCardSkeleton} from "../HourlyCardSkeleton";
import {HourlyCard} from "../HourlyCard/HourlyCard";
import {memo} from "react";

interface HourlyCardsWrapperProps {
    data?: OneCallWeatherHourly[];
    loading?: boolean;
    countSkeleton?: number;

}

export const HourlyCardsWrapper = memo((props: HourlyCardsWrapperProps) => {
    const {data, countSkeleton = 8, loading} = props

    if (loading) {
        return (
            <>
                {Array.from({ length: countSkeleton }, (_, i) => (
                    <HourlyCardSkeleton key={i} />
                ))}
            </>
        )
    }

    return (
        <>
            {data?.map((hour) => (
                <HourlyCard hourlyData={hour} key={hour.dt} />
            ))}
        </>
    )
});
