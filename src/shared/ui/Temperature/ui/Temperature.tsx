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

    return (
        <Typography className={classNames("temperature", className)} level={level}>
            {value.toFixed(decimals)}{unit}
        </Typography>
    );
};
