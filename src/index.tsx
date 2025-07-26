import { createRoot } from 'react-dom/client';
import {App} from "app/App";
import "./app/styles/index.scss"
import {BrowserRouter} from "react-router-dom";
import {StoreProvider} from "app/providers/storeProvider";
import '@fontsource/inter';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <App/>
        </StoreProvider>
    </BrowserRouter>
)

