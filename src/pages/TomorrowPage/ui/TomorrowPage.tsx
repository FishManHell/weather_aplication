import cls from "./TomorrowPage.module.scss"
import classNames from "classnames";

interface TomorrowPageProps {
    className?: string;
}

const TomorrowPage = ({className}: TomorrowPageProps) => {
    return (
        <div className={classNames(cls["tomorrow-page"], {}, [className])}>
            TomorrowPage
        </div>
    );
};

export default TomorrowPage;
