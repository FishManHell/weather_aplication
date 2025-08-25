import {useEffect} from "react";

export function useInitialEffect<T extends unknown[]>(callback: () => void, dependencies?: T) {
    useEffect(() => {
        if (__PROJECT__ !== "storybook") {
            callback()
        }
        //eslint-disable-next-line
    }, dependencies);
}