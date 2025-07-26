import {combineReducers, Reducer} from "@reduxjs/toolkit";

type NestedReducers<S> = {
    [K in keyof S]: S[K] extends object
        ? NestedReducers<S[K]> | Reducer<S[K]>
        : Reducer<S[K]>;
};

export const buildNestedReducer = <S>(map: NestedReducers<S>): Reducer<S>  => {
    const reducers: Record<string, any> = {};

    for (const key in map) {
        const value = map[key];
        reducers[key] =
            typeof value === "object" && !("reducerPath" in value)
                ? buildNestedReducer(value as any)
                : value;
    }

    return combineReducers(reducers) as Reducer<S>;
}