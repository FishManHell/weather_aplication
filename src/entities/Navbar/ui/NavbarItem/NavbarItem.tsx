import cls from "./NavbarItem.module.scss"
import classNames from "classnames";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {Navbar} from "../../module/types/navbar"

interface NavbarItemProps extends Navbar {
    className?: string;
}

export const NavbarItem = (props: NavbarItemProps) => {
    const {className, path, text} = props
    return (
        <AppLink className={classNames(cls["navbar-item"], className)} to={path}>
            <span className={cls["navbar-item-text"]}>{text}</span>
        </AppLink>
    );
};
