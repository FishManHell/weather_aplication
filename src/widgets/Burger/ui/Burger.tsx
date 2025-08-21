import cls from "./Burger.module.scss"
import classNames from "classnames";
import {memo} from "react";
import {Box, Button} from "@mui/joy";

interface BurgerMenuProps {
    className?: string;
    isOpen: boolean;
    onToggle: () => void;
    isInverted?: boolean;
}

export const Burger = memo((props: BurgerMenuProps) => {
    const {className, isInverted = false, isOpen, onToggle} = props;

    const InvertedColorBoxComponent = () => {
        return (
            <Box className={cls["burger-item"]}
                 sx={{ backgroundColor: (theme) => isInverted
                         ? theme.palette.background.card
                         : theme.palette.background.card
            }}
            />
        )
    }

    return (
        <Button
            className={classNames(cls['burger'], className, {[cls['active']]: isOpen})}
            onClick={onToggle}
            sx={{
                background: "transparent",
                "&:hover": {
                    background: "transparent",
                    boxShadow: "none",
                },
            }}
        >
            <InvertedColorBoxComponent/>
            <InvertedColorBoxComponent/>
            <InvertedColorBoxComponent/>
        </Button>
    )
})