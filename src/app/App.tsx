import {AppRouter} from "app/providers/router/AppRouter";
import {Navbar} from "widgets/Navbar";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "shared/lib/hooks";
import {fetchCurrentLocation} from "entities/CurrentLocation";
import {unitSwitcherActions} from "shared/ui/UnitSwitcher/model/slice/unitSwitcherSlice";
import {getItem} from "helpers/localStorage";
import {selectUnitSwitcherUnit} from "shared/ui/UnitSwitcher";
import {UnitType} from "shared/ui/UnitSwitcher/model/types/unitSwitcherSchema";

export const App = () => {
    const dispatch = useAppDispatch();
    const unit = useAppSelector(selectUnitSwitcherUnit);


    useEffect(() => {
        const cashedUnit = getItem<UnitType>('unit') || unit;

        dispatch(fetchCurrentLocation());
        dispatch(unitSwitcherActions.setUnitType(cashedUnit))
    }, []);

    return (
        <div className='app'>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};
