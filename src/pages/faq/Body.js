
import { Collapse, Divider } from 'antd';
import React from 'react';
import { useState, useEffect } from 'react';
import { RightOutlined } from '@ant-design/icons';


export const Body = ({ input }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=9')
            .then(res => res.json())
            .then(json => setData(json))
    }, []);

    const filterData = input ? data?.filter((items) => items.title.toLowerCase().
        startsWith(input.toLowerCase())) : data

    return (
        <>
            {filterData?.map((item, index) => {
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
        </>
    )

}

























