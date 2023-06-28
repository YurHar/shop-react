import React from 'react';
import { Layout } from 'antd';
import {DefaultHeader} from "./default-header";
import {DefaultFooter} from "./default-footer";

const { Content } = Layout;

const MainContent = ({ children }) => {
    return (
        <>
            <DefaultHeader/>
            <Content>{children}</Content>
            <DefaultFooter />
        </>
    )
};

export default MainContent;