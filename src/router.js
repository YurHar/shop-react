import {BrowserRouter, Routes, Route} from "react-router-dom";
import {PATHS} from "./helpers/constant";
import {HomePage} from "./pages/home-page";
import {Clothing} from "./pages/clothing";
import {Accessorize} from "./pages/accessorize";
import {About} from "./pages/about";
import {TShirt} from "./pages/clothing/t-shirt";
import {Hoodie} from "./pages/clothing/hoodie";
import App from "./App";

export const Router = () => {
    return (
        <BrowserRouter>
            <App />
            <Routes>
                <Route path={PATHS.ROOT} element={<HomePage/>}/>
                <Route path={PATHS.CLOTHING} element={<Clothing/>}/>
                <Route path={PATHS.ACCESSORIZE} element={<Accessorize/>}/>
                <Route path={PATHS.ABOUT} element={<About/>}/>
                <Route path={`${PATHS.T_SHIRT}/*`} element={<TShirt/>}/>
                <Route path={`${PATHS.HOODIE}/*`} element={<Hoodie/>}/>
            </Routes>
        </BrowserRouter>
    );
}