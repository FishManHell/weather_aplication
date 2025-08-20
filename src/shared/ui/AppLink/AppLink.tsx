import cls from "./AppLink.module.scss";
import classNames from "classnames";
import { ReactNode } from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import { Link as JoyLink, LinkProps as JoyLinkProps } from "@mui/joy";


interface AppLinkProps extends Omit<JoyLinkProps, "component"> {
    to: RouterLinkProps["to"];
    children?: ReactNode;
    className?: string;
    inverse?: boolean;
}

export const AppLink = (props: AppLinkProps) => {
    const { className, children, to, inverse, sx, ...otherProps } = props;

    return (
        <JoyLink
            component={RouterLink}
            to={to}
            className={classNames(cls['app-link'], className)}
            sx={{ color: (theme) => {
                    return inverse
                        ? theme.palette.text.secondary
                        : theme.palette.text.primary
                },
                ...sx
            }}
            {...otherProps}
        >
            {children}
        </JoyLink>
    );
};