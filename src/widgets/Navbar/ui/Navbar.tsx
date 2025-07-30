import cls from "./Navbar.module.scss"
import classNames from "classnames";
import {NavbarItems} from "entities/Navbar";
import {UnitSwitcher} from "shared/ui/UnitSwitcher";
import {NavbarWeather} from "../ui/NavbarWeather/NavbarWeather";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls["navbar"], {}, [className])}>
            <div className={cls['navbar-weather-container']}>
                <NavbarWeather/>
                <div className={cls['navbar-weather-container-unit-switcher']}>
                    <UnitSwitcher/>
                </div>
            </div>
            <NavbarItems/>
        </div>
    );
};
