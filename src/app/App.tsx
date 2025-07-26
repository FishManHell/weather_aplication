import {AppRouter} from "app/providers/router/AppRouter";
import {Navbar} from "widgets/Navbar";

export const App = () => {

    return (
        <div className='app'>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};
