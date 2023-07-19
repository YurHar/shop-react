import { Row } from "antd";
import AboutLogo from './images/girl.jpg'
import { useState, } from "react";

export const AboutUs = () => {
    const [data, setData] = useState();

    return (
        <>
            <Row>
                <img src={AboutLogo}
                    style={{
                        width: "100%",
                        position: "absolute",
                        marginBottom:"50px"
                    }} />
            </Row>
        </>
    )
}