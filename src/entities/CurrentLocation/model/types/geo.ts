import {Coordinates} from "shared/types";
import {geoLocationError} from "../types/currentLocationSchema";

type Resolve = (coords: Coordinates) => void;
type Reject = (error: geoLocationError) => void ;

export interface SettledRef {
    current: boolean;
}

interface PromiseParams {
    resolve: Resolve;
    reject: Reject;
}

interface IError extends PromiseParams {
    settledRef: SettledRef
}

interface ISuccess extends Omit<PromiseParams, 'reject'> {
    settledRef: SettledRef
}

export type SuccessCallback = ({resolve, settledRef}: ISuccess) => (geolocationPosition: GeolocationPosition) => void;

export type ErrorCallback = ({ resolve, reject, settledRef}: IError) => (err: GeolocationPositionError) => void

export type WatchPositionFallback = ({resolve, reject}: PromiseParams) => void;

export type GetPositionCallback = () => Promise<Coordinates>