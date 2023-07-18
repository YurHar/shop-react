import { Col, Row } from "antd";
import { useState, useEffect } from "react";

export const Services = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=3')
            .then(res => res.json())
            .then(json => setData(json))
    }, []);

    return (
        <>
            <Row style={{ width: "600px", marginLeft: "700px", marginTop: "200px" }}>
                <Col>
                    <h1 style={{ marginLeft: "230px", marginTop:"-100px" }}>Just GO</h1>
                </Col>
                {data?.map((item, index) => {
                    return (
                        <Col >
                            {<p style={{
                                fontSize: "16px",
                            }}>{item.description}</p>}
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}