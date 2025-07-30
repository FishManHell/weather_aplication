import cls from "./NavbarItems.module.scss"
import classNames from "classnames";
import {NavbarItemsList} from "entities/Navbar/model/navbarItems";
import {NavbarItem} from "../NavbarItem/NavbarItem";

interface NavbarItemsProps {
    className?: string;
}

export const NavbarItems = (props: NavbarItemsProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls["navbar-items"], className)}>
            {NavbarItemsList.map(item => <NavbarItem {...item} key={item.text}/>)}
        </div>
    );
};
