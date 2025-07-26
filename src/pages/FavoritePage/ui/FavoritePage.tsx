import cls from "./FavoritePage.module.scss"
import classNames from "classnames";

interface FavoritePageProps {
    className?: string;
}

const FavoritePage = ({className}: FavoritePageProps) => {
    return (
        <div className={classNames(cls["favorite-page"], {}, [className])}>
            FavoritePage
        </div>
    );
};

export default FavoritePage;