import { Collapse,Row,Col } from 'antd';
import React from 'react';
import { useState, useEffect } from 'react';
import { RightOutlined } from '@ant-design/icons';

export const Body = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=9')
            .then(res => res.json())
            .then(json => setData(json))
    }, []);

    return (
        <>
            <Row justify={"center"}>
                <Col span={24} style={{textAlign:"center"}}>
                    <h1>Frequently asked questions</h1>
                    <p style={{ fontSize: "18px" }}>Below are answers to frequently asked questions.</p>
                </Col>
                <Col span={24}>
                    {data?.map((item, index) => {
                        return (
                            <>
                                <Collapse
                                    ghost
                                    expandIcon={({ isActive }) => (
                                        <RightOutlined
                                            style={{ marginTop: "3vh" }}
                                            rotate={isActive ? 180 : 0}
                                        />
                                    )}
                                    style={{
                                        width: "50%",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        backgroundColor: "#CAB099",
                                        marginBottom: "20px",
                                        textAlign: "center"
                                    }}
                                    items={[
                                        {
                                            key: <p>{item.id}</p>,
                                            label: <p>{item.title}</p>,
                                            children: <p>{item.description}</p>,
                                        },
                                    ]}
                                />
                            </>
                        )
                    })}
                </Col>
            </Row>
        </>
    )
}