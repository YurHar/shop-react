import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const contentStyle = {
    padding: '0 50px'
};

const MainContent = ({ children }) => {
    return <Content style={contentStyle}>{children}</Content>;
};

export default MainContent;