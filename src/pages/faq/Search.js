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
            <Row justify={'center'} style={{
                marginBottom: "50px",
                width: "50%",
                marginLeft: "340px"
            }}>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={handleInput}
                />
            </Row>
        </>
    )
}