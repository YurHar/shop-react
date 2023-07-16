
import { Collapse, Divider } from 'antd';
import React from 'react';
import { useState, useEffect } from 'react';


export const Body = ({ input }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=9')
            .then(res => res.json())
            .then(json => setData(json))
    }, []);

    const filterData = input ? data?.filter((items) => items.title.toLowerCase().startsWith(input.toLowerCase())) : data

    return (
        <>
            {filterData?.map((item, index) => {
                return (
                    <>
                    
                        <Collapse 
                         style={{
                            width: "50%",
                            marginLeft: "auto", 
                            marginRight: "auto",
                            backgroundColor: "#958271",
                            marginBottom:"20px"
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

























