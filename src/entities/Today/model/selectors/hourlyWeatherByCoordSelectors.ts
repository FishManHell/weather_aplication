import {StateSchema} from "app/providers/storeProvider";

export const selectHourlyByCoords = (state: StateSchema) => state.api.today.forecastHourly.hourly;
export const selectHourlyByCoordsLoading = (state: StateSchema) => state.api.today.forecastHourly.isLoading;
export const selectHourlyByCoordError = (state: StateSchema) => state.api.today.forecastHourly.error;
