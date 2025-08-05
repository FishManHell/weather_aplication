import cls from "./TodayPage.module.scss"
import classNames from "classnames";
import {WeatherBigCard} from "entities/Today/ui/WeatherBigCard/WeatherBigCard";
import {WeatherSmallCard} from "entities/Today/ui/WeatherSmallCard/WeatherSmallCard";
import {Search} from "widgets/Search/ui/Search";

interface TodayPageProps {
    className?: string;
}

const TodayPage = ({className}: TodayPageProps) => {
    return (
        <div className={classNames(cls["today-page"], {}, [className])}>
            <Search/>
            <WeatherBigCard/>

            <WeatherSmallCard/>
        </div>
    );
};


export default TodayPage;