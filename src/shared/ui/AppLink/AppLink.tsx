import cls from "./AppLink.module.scss"
import classNames from "classnames"
import {ReactNode} from "react";
import {Link, LinkProps} from "react-router-dom";

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
}

export const AppLink = (props: AppLinkProps) => {
    const {className, children, to, ...otherProps} = props;

    return (
        <Link to={to} className={classNames(cls['app-link'], className)} {...otherProps}>
            {children}
        </Link>
    );
};