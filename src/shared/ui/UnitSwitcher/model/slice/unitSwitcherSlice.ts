import {UnitSwitcherSchema, UnitType} from "../types/unitSwitcherSchema";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: UnitSwitcherSchema = {
    unit: "°C",
    temperatureUnit: "metric"

}


const unitSwitcherSlice = createSlice({
    name: 'unitSwitcher',
    initialState,
    reducers: {
        setUnitType: (state, {payload}: PayloadAction<UnitType>) => {
            state.unit = payload;
            state.temperatureUnit = payload === "°C" ? "metric" : "imperial";
        }
    }
})


export const {
    reducer: unitSwitcherReducer,
    actions: unitSwitcherActions
} = unitSwitcherSlice