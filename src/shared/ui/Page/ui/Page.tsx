import cls from "./Page.module.scss"
import classNames from "classnames";
import {forwardRef, ReactNode} from "react";

interface PageProps {
    className?: string;
    children: ReactNode;
}

export const Page = forwardRef<HTMLDivElement, PageProps>
(( props, ref) => {
    const {className, children} = props;

    return (
        <div
            ref={ref}
            className={classNames(cls["page"], className)}
        >
            {children}
        </div>
    );
});


Page.displayName = "Page";
