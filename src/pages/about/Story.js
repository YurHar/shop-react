import { Col, Row } from "antd";
import { useState, useEffect } from "react";
import StoryFoto from "./images/story-foto.png"


const contentStyle = {
    display: 'flex',
    width: '100%',
    height: 450,
    justifyContent: 'start',
    background: '#f5f5f5',
    marginTop: "50px"
};

export const Story = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=2')
            .then(res => res.json())
            .then(json => setData(json))
    }, []);

    return (
        <>
            <div style={contentStyle}>
                <div>
                    <img src={StoryFoto}
                        style={{ width: "90%", height: "400px", marginLeft: "40px" }} />
                </div>

                <div style={{ width: '50%', }}>
                    <h2 style={{ textAlign: "center", fontSize: "32px" }}>Story</h2>
                    <Row style={{ fontSize: "18px", textAlign: "center" }}>
                        {data?.map((item, index) => {
                            return (
                                <Col >
                                    {<p style={{ fontSize: "16px", }}>{item.description}</p>}
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </div>
        </>
    )
}




