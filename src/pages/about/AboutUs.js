import { Col, Row } from "antd";
import AboutLogo from './images/shoppingGirl-2.jpg'
import { useState, useEffect } from "react";


export const AboutUs = () => {
    const [data, setData] = useState();

    return (
        <>
            <div>
                <Row>
                    <img src={AboutLogo}
                        style={{ width: "100%", height: "auto", position: "absolute", bottom: "10px", top: "190px", }} />
                </Row>
            </div>

          
        </>
    )


}








