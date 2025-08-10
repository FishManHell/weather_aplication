import classNames from "classnames";
import {Typography} from "@mui/joy";
import {ComponentProps, FC} from "react";
import {useSelector} from "react-redux";
import {selectUnitSwitcherUnit} from "shared/ui/UnitSwitcher/model/selectors/unitSwitcher";

interface TemperatureProps {
    className?: string;
    value: number;
    decimals?: number;
    level?: ComponentProps<typeof Typography>['level']
}

export const Temperature: FC<TemperatureProps> = (props) => {
    const {className, level = 'body-lg', decimals, value} = props;
    const unit = useSelector(selectUnitSwitcherUnit);

    return (
        <Typography className={classNames("temperature", className)} level={level}>
            {value.toFixed(decimals)}{unit}
        </Typography>
    );
};
