import {MutableRefObject, useEffect, useRef, useState} from "react";

interface UseScrollObserverOptions<T> {
    items: T[];
    getId: (item: T) => string;
    onItemVisible: (item: T) => void;
    containerRef: MutableRefObject<HTMLDivElement | null>
}


export const useScrollObserver = <T>(
    {items, getId, onItemVisible, containerRef}: UseScrollObserverOptions<T>
) => {
    const elementRefs = useRef<Map<string, HTMLDivElement>>(new Map());

    const [loaded, setLoaded] = useState<Set<string>>(new Set());

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.getAttribute("data-id");

                    if (id && entry.isIntersecting && entry.intersectionRatio >= 0.5 && !loaded.has(id)) {
                        const item = items.find((i) => getId(i) === id);
                        if (item) {
                            onItemVisible(item);
                            setLoaded((prev) => new Set(prev).add(id));
                        }
                    }
                });
            },
            { root: container, threshold: 0.5 }
        );

        elementRefs.current.forEach((el) => observer.observe(el));
        return () => observer.disconnect();

    }, [items, loaded, getId, onItemVisible]);

    return { containerRef, elementRefs };
};