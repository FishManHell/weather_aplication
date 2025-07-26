import cls from "./TodayPage.module.scss"
import classNames from "classnames";

interface TodayPageProps {
    className?: string;
}

const TodayPage = ({className}: TodayPageProps) => {
    return (
        <div className={classNames(cls["today-page"], {}, [className])}>
            TodayPage
        </div>
    );
};


export default TodayPage;