import {useLocation} from "react-router-dom";
import {MenHoodie} from "./men-hoodie";
import {WomenHoodie} from "./women-hoodie";

export const Hoodie = () => {
    const location = useLocation();

    return (
        location.state === 1 ? <MenHoodie/> : <WomenHoodie/>
    )
}