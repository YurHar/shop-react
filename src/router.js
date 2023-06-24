import {BrowserRouter, Routes, Route} from "react-router-dom";
import {PATHS} from "./helpers/constant";
import {HomePage} from "./pages/home-page";
import {Clothing} from "./pages/clothing";
import {Accessorize} from "./pages/accessorize";
import {About} from "./pages/about";
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
            </Routes>
        </BrowserRouter>
    );
}