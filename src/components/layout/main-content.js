import React from 'react';
import { Layout } from 'antd';
import {DefaultHeader} from "./default-header";
import {DefaultFooter} from "./default-footer";

const { Content } = Layout;

const MainContent = ({ children }) => {
    return (
        <>
            <DefaultHeader/>
            <Content style={{minHeight: '67.9vh'}}>{children}</Content>
            <DefaultFooter />
        </>
    )
};

export default MainContent;