import classNames from "classnames";
import {Switch, SwitchProps} from "@mui/joy";
import {useAppDispatch, useAppSelector} from "shared/lib/hooks";
import {memo} from "react";
import {selectUnitSwitcherUnit} from "../model/selectors/unitSwitcher";
import {UnitType} from "../model/types/unitSwitcherSchema";
import {unitSwitcherActions} from "../model/slice/unitSwitcherSlice";
import {unitSwitcherStyles} from "../model/styles/swticherStyles";
import {setItem} from "helpers/localStorage";

export const UnitSwitcher = memo((props: SwitchProps) => {
    const {className, ...otherProps} = props
    const dispatch = useAppDispatch();
    const unit = useAppSelector(selectUnitSwitcherUnit);

    const isCelsius = unit === "°C";

    const onChangeUnitType = () => {
        const newUnit: UnitType = isCelsius ? '°F' : '°C';
        setItem('unit', newUnit)
        dispatch(unitSwitcherActions.setUnitType(newUnit));
    }

    return (
        <Switch
            {...otherProps}
            className={classNames("unit-switcher", className)}
            sx={unitSwitcherStyles}
            onChange={onChangeUnitType}
            checked={isCelsius}
            startDecorator={"°F"}
            endDecorator={"°C"}
        />
    );
});
