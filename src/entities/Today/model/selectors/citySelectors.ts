import {StateSchema} from "app/providers/storeProvider";

export const selectCity = (state: StateSchema) => state.api.today.location.city;
export const selectCityLoading = (state: StateSchema) => state.api.today.location.isLoading;
export const selectCityError = (state: StateSchema) => state.api.today.location.error;