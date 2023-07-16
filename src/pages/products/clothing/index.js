import {useLocation} from "react-router-dom";
import {TShirtMen} from "./t-shirt-men";
import {TShirtWomen} from "./t-shirt-women";
import MainContent from "../../../components/layout/main-content";

export const TShirt = () => {
    const location = useLocation();

    return (
        <MainContent>
            {location.state === 1 ? <TShirtMen/> : <TShirtWomen/>}
        </MainContent>
    )
}