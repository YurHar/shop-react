import { Col, Row } from "antd";
import { useState, useEffect } from "react";
import BodyFoto from "./images/body-foto-1.webp"

export const Body = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=2')
            .then(res => res.json())
            .then(json => setData(json))
    }, []);
    return (
        <>
            <Row style={{ position: "relative", marginTop: "150px" }}>
                <Col span={12}>
                    <Col style={{ width: '100%', }}>
                        <h2 style={{
                            fontSize: "32px",
                            textAlign: "center",
                        }}>
                            "Top-Shop"  provides all the necessary services for the online sale of goods
                            manufactured in Armenia</h2> </Col>
                    {data?.map((item, index) => {
                        return (
                            <Col key={index} >
                                {<p style={{
                                    fontSize: "16px",
                                    textAlign: "center"
                                }}>{item.description}</p>}
                            </Col>
                        )
                    })}
                </Col>
                <Col span={12}>
                    <img src={BodyFoto}
                        style={{ width: "90%", height: "400px", marginLeft: "40px" }} />
                </Col>
            </Row>
        </>
    )
}