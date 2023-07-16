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

            <Row>
                <Col>
                    <h1 style={{ marginLeft: "900px" }}>Just GO</h1>
                </Col>

            </Row>


            <Row >
                {data?.map((item, index) => {
                    return (

                        <Col >
                            {<p style={{ fontSize: "16px", width: "600px", marginLeft: "700px" }}>{item.description}</p>}
                        </Col>
                    )
                })}
            </Row>

        </>
    )
}

