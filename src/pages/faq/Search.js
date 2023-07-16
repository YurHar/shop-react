
import { AudioOutlined } from '@ant-design/icons';
import { Input, Row } from 'antd';
import React from 'react';


const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />
);

export const SearchInput = ({ handleInput }) => {

    return (
        <>
            <Row justify={'center'} >
                <h1>Frequently asked questions</h1>
            </Row>
            <Row justify={'center'}>
                <p style={{ fontSize: "18px" }}>Below are answers to frequently asked questions.</p>
            </Row>
            <Row justify={'center'} style={{ marginBottom: "50px" }}>
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    suffix={suffix}
                    onSearch={handleInput}
                    style={{ width: "50%" }}
                />
            </Row>
        </>
    )
}









