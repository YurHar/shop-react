import {useLocation} from "react-router-dom";
import {TShirtMen} from "./t-shirt-men";
import {TShirtWomen} from "./t-shirt-women";

export const TShirt = () => {
    const location = useLocation();

    return (
        location.state === 1 ? <TShirtMen/> : <TShirtWomen/>
    )
}