import {Coordinates} from "shared/types";

interface CurrentLocationError {
    code: number;
    message: string;
}

export interface CurrentLocationSchema {
    location?: Coordinates;
    error?: CurrentLocationError,
    status?: string;
}