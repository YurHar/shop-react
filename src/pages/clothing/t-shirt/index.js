import {useLocation} from "react-router-dom";

export const TShirt = () => {
    const location = useLocation();

    return (
        <h1>{location.state === 1 ? "Men t-shirt" : "Women t-shirt"}</h1>
    )
}