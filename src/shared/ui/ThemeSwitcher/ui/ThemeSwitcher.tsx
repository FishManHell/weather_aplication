import cls from "./ThemeSwitcher.module.scss"
import classNames from "classnames"
// import {Button} from "shared/ui/Button";
import ThemeIcon from "shared/assets/icons/Theme.svg"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {themeSwitcherActions} from "../model/slice/themeSwitcherSlice";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {selectThemeSwitcherTheme} from "../model/selectors/themeSwitcher";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {className} = props;
    const dispatch = useAppDispatch();

    const theme = useSelector(selectThemeSwitcherTheme);

    useEffect(() => {
        if (!document.body.className.includes(theme)) {
            document.body.className = theme;
        }
    }, [theme]);

    return (
        <button
            className={classNames(cls["theme-switcher"], className)}
            onClick={() => dispatch(themeSwitcherActions.toggleTheme())}
        >
            <ThemeIcon/>
        </button>
    );
};