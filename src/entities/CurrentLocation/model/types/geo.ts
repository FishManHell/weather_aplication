import {Coordinates} from "shared/types";
import {geoLocationError} from "../types/currentLocationSchema";

type PromiseParams = {
    resolve: (coords: Coordinates) => void;
    reject: (error: geoLocationError) => void;
};

export type ResolveParams = (coords: Coordinates) => void;

export type WatchPositionFallback = ({resolve, reject}: PromiseParams) => void;

export type ErrorCallbackFactory = ({ resolve, reject }: PromiseParams) => (err: GeolocationPositionError) => void