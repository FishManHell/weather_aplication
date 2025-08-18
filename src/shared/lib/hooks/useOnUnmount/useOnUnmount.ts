import {useEffect} from "react";

type CleanUp = () => void;

export const useOnUnmount = (cleanup: CleanUp) => {
    useEffect(() => {
        return () => {
            cleanup();
        }
    }, [])
}