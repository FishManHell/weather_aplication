import {StateSchema} from "app/providers/storeProvider";

export const selectUnitSwitcherUnit = (state: StateSchema) => state.ui.switchers.unit.unit || "°C";
export const selectTemperatureUnit = (state: StateSchema) => state.ui.switchers.unit.temperatureUnit;