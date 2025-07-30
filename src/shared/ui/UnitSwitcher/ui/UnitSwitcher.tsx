import classNames from "classnames";
import {Switch, SwitchProps} from "@mui/joy";
import {useAppDispatch} from "shared/lib/hooks";
import {useSelector} from "react-redux";
import {memo} from "react";
import {selectUnitSwitcherUnit} from "../model/selectors/unitSwitcher";
import {UnitType} from "../model/types/unitSwitcherSchema";
import {unitSwitcherActions} from "../model/slice/unitSwitcherSlice";
import {unitSwitcherStyles} from "../model/styles/swticherStyles";

export const UnitSwitcher = memo((props: SwitchProps) => {
    const {className, sx, onChange, checked, startDecorator, endDecorator, ...otherProps} = props
    const dispatch = useAppDispatch();
    const unit = useSelector(selectUnitSwitcherUnit);

    const isCelsius = unit === "°C";

    const onChangeUnitType = () => {
        const newUnit: UnitType = isCelsius ? '°F' : '°C';
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
