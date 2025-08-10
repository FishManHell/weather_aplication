import {StateSchema} from "app/providers/storeProvider";


export const selectCurrentLocation = (state: StateSchema) => state.ui.currentLocation.location;