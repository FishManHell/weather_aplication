import {AppRouter} from "app/providers/router/AppRouter";
import {Navbar} from "widgets/Navbar";
import {useEffect} from "react";
import {useAppDispatch} from "shared/lib/hooks";
import {fetchCurrentLocation} from "entities/CurrentLocation";

export const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCurrentLocation());
    }, []);

    return (
        <div className='app'>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};
