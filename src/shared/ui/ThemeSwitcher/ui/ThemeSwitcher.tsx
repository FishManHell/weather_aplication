import cls from "./ThemeSwitcher.module.scss"
import classNames from "classnames"
import {useTheme} from "app/providers/ThemeProvider";
// import {Button} from "shared/ui/Button";
import ThemeIcon from "shared/assets/icons/Theme.svg"

interface ThemeSwitcherProps {
    className?: string;
    isOpenBurgerMenu?: boolean;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {className, isOpenBurgerMenu} = props;
    const {toggleTheme} = useTheme();

    const mods = {[cls['theme-switcher-opened-burger-menu']]: isOpenBurgerMenu}

    return (
        <button
            className={classNames(cls["theme-switcher"], className, mods)}
            onClick={toggleTheme}
        >
            <ThemeIcon/>
        </button>
    );
};