import { useTheme } from '@mui/joy';
import {ElementType} from "react";
import classNames from "classnames";

interface ThemedIconProps {
    className?: string;
    isActive?: boolean;
    isInverted?: boolean;
    Icon: ElementType;
    ActiveIcon?: ElementType;
}

export const ThemedIcon = (props: ThemedIconProps) => {
    const { isActive, isInverted, className, ActiveIcon, Icon} = props;
    const theme = useTheme();
    const iconColor = !isInverted ? theme.palette.text.primary : theme.palette.text.secondary;

    const IconComponent = isActive && ActiveIcon ? ActiveIcon : Icon;

    return (
        <IconComponent
            color={iconColor}
            className={classNames('themed-icon', className)}
        />
    )
};