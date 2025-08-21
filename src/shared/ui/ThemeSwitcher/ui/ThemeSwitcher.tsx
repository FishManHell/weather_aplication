import cls from "./ThemeSwitcher.module.scss"
import classNames from "classnames"
import ThemeIcon from "shared/assets/icons/Theme.svg"
import {IconButton} from "@mui/joy";
import { useColorScheme } from '@mui/joy/styles';
import {memo} from "react";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const {className} = props;
    const {mode, setMode} = useColorScheme();

    const onToggle = () => setMode(mode === 'dark' ? 'light' : 'dark')

    return (
        <IconButton
            className={classNames(cls["theme-switcher"], className)}
            onClick={onToggle}
            sx={{
                "&:hover": {
                    backgroundColor: "transparent",
                    color: "inherit",
                    "--Icon-color": "inherit"
                },
            }}
        >
            <ThemeIcon/>
        </IconButton>
    );
});