import cls from "./Navbar.module.scss"
import classNames from "classnames";
import {NavbarItems} from "entities/Navbar";
import {useSelector} from "react-redux";
import {selectUnitSwitcherUnit, unitSwitcherActions} from "shared/ui/UnitSwitcher";
import {UnitType} from "shared/ui/UnitSwitcher/model/types/unitSwitcherSchema";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Switch} from "@mui/joy";
import {$api} from "shared/api/api";
import axios from "axios";
import {useGetGeolocation} from "shared/lib/hooks/useGetGeolocation/useGetGeolocation";

interface NavbarProps {
    className?: string;
}

const REACT_APP_API_KEY: string = process.env.REACT_APP_API_KEY || ''

export const Navbar = ({className}: NavbarProps) => {
    const dispatch = useAppDispatch()
    const unit = useSelector(selectUnitSwitcherUnit);

    const positions = useGetGeolocation()

    const isCelsius = unit === "°C"

    const onChange = () => {
        const newUnit: UnitType = isCelsius ? '°F' : '°C';
        dispatch(unitSwitcherActions.setUnitType(newUnit));
    }


    const homeBaseQuery = new URLSearchParams({q: "Dnepr", appid: REACT_APP_API_KEY, units: "metric"}).toString();
    const homeBaseQueryTwo = new URLSearchParams({lat: `${positions.lat}`, lon: `${positions.long}`, appid: REACT_APP_API_KEY, units: "metric"}).toString();

    const fetchCurrentDayWeather = async () => {
        const str = `https://api.openweathermap.org/data/2.5/weather?`
        console.log(str, "str")
        try {
            const weatherApi = $api(str)
            const response = await weatherApi.get(homeBaseQueryTwo)
            return response
        } catch (error) {
            // @ts-ignore
            throw new Error(error);
        }
    }

    fetchCurrentDayWeather()

    return (
        <div className={classNames(cls["navbar"], {}, [className])}>
            <div className={cls['navbar-weather-container']}>
                <div className={cls['navbar-weather-container-today']}>
                    <header>
                        icon
                    </header>
                    <section>
                        <h1></h1>
                    </section>
                    <footer>
                        time
                    </footer>
                </div>
                <div className={cls['navbar-weather-container-unit-switcher']}>
                    <Switch
                        checked={isCelsius}
                        onChange={onChange}
                        startDecorator={"°F"}
                        endDecorator={"°C"}
                        sx={{
                            '--Switch-thumbSize': '25px',
                            '--Switch-trackWidth': '90px',
                            '--Switch-trackHeight': '30px',

                            '--Switch-thumbBackground': '#181515',

                            '&.Mui-checked': {
                                '--Switch-thumbBackground': '#181515',
                            },
                            '& .MuiSwitch-track': {
                                backgroundImage: 'linear-gradient(90deg, rgba(51,224,23,1), rgba(0,0,0,1))',
                                backgroundColor: 'transparent',
                            },
                            '& .MuiSwitch-thumb': {
                                boxShadow: 'none !important',
                            },

                            '&.Mui-checked .MuiSwitch-thumb': {
                                boxShadow: 'none !important',
                            },
                    }}
                    />

                </div>
            </div>
            <NavbarItems/>
        </div>
    );
};
