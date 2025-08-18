import {TypedUseSelectorHook, useSelector} from "react-redux";
import {StateSchema} from "app/providers/storeProvider";


export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;
