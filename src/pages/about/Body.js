import { Col, Row } from "antd";
import { useState, useEffect } from "react";
import BodyFoto from "./images/body-foto-1.webp"


const contentStyle = {
    display: 'flex',
    width: '100%',
    position: "relative",
    paddingTop: "60px",
    height: 450,
    justifyContent: 'start',
    background: '#f5f5f5',
    marginTop: "30px"
    
};

export const Body = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=2')
            .then(res => res.json())
            .then(json => setData(json))
    }, []);
    return (
        <>
            <div style={contentStyle}>
                <div style={{ width: '50%', }}>
                    <h2 style={{ fontSize: "32px", textAlign: "center", }}>"Top-Shop"
                        provides all the necessary services for the online sale of goods manufactured in Armenia</h2>
                    <Row style={{ fontSize: "18px", textAlign: "center" }}>
                        {data?.map((item, index) => {
                            return (
                                <Col key={index} >
                                    {<p style={{ fontSize: "16px", }}>{item.description}</p>}
                                </Col>
                            )
                        })}

                    </Row>
                </div>
                <div>
                    <img src={BodyFoto}
                        style={{ width: "90%", height: "400px", marginLeft: "40px" }} />
                </div>
            </div>
        </>
    )
}