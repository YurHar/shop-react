import {useLocation} from "react-router-dom";
import {MenHoodie} from "./men-hoodie";
import {WomenHoodie} from "./women-hoodie";
import MainContent from "../../../components/layout/main-content";

export const Hoodie = () => {
    const location = useLocation();

    return (
        <MainContent>
            {location.state === 1 ? <MenHoodie/> : <WomenHoodie/>}
        </MainContent>
    )
}