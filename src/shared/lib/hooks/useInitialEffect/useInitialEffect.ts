import {useEffect} from "react";

export function useInitialEffect<T extends unknown[]>(callback: () => void | (() => void), dependencies?: T) {
    useEffect(() => {
        if (__PROJECT__ !== "storybook") {
            return callback();
        }
    }, dependencies);
}