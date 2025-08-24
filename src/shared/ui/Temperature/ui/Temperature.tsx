import classNames from "classnames";
import {Typography} from "@mui/joy";
import {ComponentProps, FC} from "react";
import {selectUnitSwitcherUnit} from "shared/ui/UnitSwitcher";
import {useAppSelector} from "shared/lib/hooks";

interface TemperatureProps {
    className?: string;
    value: number;
    decimals?: number;
    level?: ComponentProps<typeof Typography>['level']
}

export const Temperature: FC<TemperatureProps> = (props) => {
    const {className, level = 'body-lg', decimals, value} = props;
    const unit = useAppSelector(selectUnitSwitcherUnit);

    const displayValue = unit === "°F" ? value * 9 / 5 + 32 : value;

    return (
        <Typography className={classNames("temperature", className)} level={level}>
            {displayValue.toFixed(decimals)}{unit}
        </Typography>
    );
};
