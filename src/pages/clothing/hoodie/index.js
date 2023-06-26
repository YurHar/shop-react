import {useLocation} from "react-router-dom";

export const Hoodie = () => {
    const location = useLocation();

    return (
        <h1>{location.state === 1 ? "Men Hoodie" : "Women Hoodie"}</h1>
    )
}