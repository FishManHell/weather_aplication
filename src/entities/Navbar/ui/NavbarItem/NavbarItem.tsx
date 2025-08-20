import cls from "./NavbarItem.module.scss"
import classNames from "classnames";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {INavbarItem} from "../../model/types/navbarItem";

interface NavbarItemProps extends INavbarItem {
    className?: string;
}

export const NavbarItem = (props: NavbarItemProps) => {
    const {className, path, text} = props
    return (
        <AppLink className={classNames(cls["navbar-item"], className)} to={path} inverse>
            <span className={cls["navbar-item-text"]}>{text}</span>
        </AppLink>
    );
};
