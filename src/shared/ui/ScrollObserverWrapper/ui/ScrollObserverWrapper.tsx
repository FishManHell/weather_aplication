import {useScrollObserver} from "shared/lib/hooks";
import {MutableRefObject, ReactNode} from "react";

interface ScrollObserverWrapperProps<T> {
    items: T[];
    getId: (item: T) => string;
    onItemVisible: (item: T) => void;
    containerRef: MutableRefObject<HTMLDivElement | null>
    children: (item: T) => ReactNode;
}

export const ScrollObserverWrapper = <T, >(
    {items, getId, onItemVisible, containerRef, children}: ScrollObserverWrapperProps<T>
) => {
    const { elementRefs } = useScrollObserver({items, getId, containerRef, onItemVisible});

    return (
        <>
            {items.map((item) => {
                const id = getId(item);
                return (
                    <div key={id} data-id={id}
                         ref={(el) => {
                             if (el) elementRefs.current.set(id, el);
                             else elementRefs.current.delete(id);
                         }}
                    >
                        {children(item)}
                    </div>
                );
            })}
        </>

    );
};