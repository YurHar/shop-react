import { Row } from "antd";
import AboutLogo from './images/shoppingGirl.jpg'
import { useState,} from "react";


export const AboutUs = () => {
    const [data, setData] = useState();

    return (
        <>
            <Row>
                <img src={AboutLogo}
                    style={{
                        width: "100%",
                        position: "absolute",
                    }} />
            </Row>
        </>
    )
}








