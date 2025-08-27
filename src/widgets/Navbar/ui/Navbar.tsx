import cls from "./Navbar.module.scss"
import classNames from "classnames";
import {NavbarItems} from "entities/Navbar";
import {UnitSwitcher} from "shared/ui/UnitSwitcher";
import {NavbarWeather} from "../ui/NavbarWeather/NavbarWeather";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {ResizeContainer} from "shared/ui/ResizeContainer";
import {BurgerMenu} from "features/BurgerMenu";
import {DefaultStorybookSizes} from "shared/types";

interface NavbarProps {
    className?: string;
    storybookSizes?: DefaultStorybookSizes // test version
}

const BODY_PADDING = 10
const MIN_SIZE = 650

const MIN_CONTENT_WIDTH = MIN_SIZE - BODY_PADDING * 2;

export const Navbar = ({className, storybookSizes}: NavbarProps) => {
    return (
        <ResizeContainer
            refreshMode={'throttle'}
            refreshRate={400}
            className={classNames(cls["navbar"], className)}
            storybookSizes={storybookSizes}
        >
            {(width) => {
                return (
                    <>
                        <div className={cls['navbar-weather-container']}>
                            <NavbarWeather/>
                            <div className={cls['navbar-weather-container-unit-switcher']}>
                                <UnitSwitcher/>
                            </div>
                        </div>

                        <div className={cls['navbar-theme-switcher']} >
                            <ThemeSwitcher />
                        </div>
                        {width <= MIN_CONTENT_WIDTH ? <BurgerMenu/> : <NavbarItems/>}
                    </>
                )
            }}
        </ResizeContainer>
    );
};
