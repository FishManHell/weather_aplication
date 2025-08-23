
export type UnitType = "°C" | "°F"
export type TemperatureUnit = "metric" | "imperial"

export interface UnitSwitcherSchema {
    unit: UnitType,
    temperatureUnit: TemperatureUnit

}