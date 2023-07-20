import React from "react";
import {Col, Row, Table,} from 'antd';
import {useColumns} from "./use-column";
import Logo from '../../components/layout/images/shop-logo.png'
import {DefaultFooter} from "../../components/layout/default-footer";
import {LogoutOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {PATHS} from "../../helpers/constant";

export const ProductTable = () => {
    const columns = useColumns();
    const navigate = useNavigate();

    let data = JSON.parse(localStorage.getItem("soldItems"));

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate(`${PATHS.LOGIN}`);
    };

    return (
        <>
            <Row align="middle" style={{background: "#958271"}}>
                <Col span={16} style={{textAlign: 'center'}}>
                    <img src={Logo} style={{width: 150}} alt=""/>
                </Col>
                <Col span={8}>
                    <LogoutOutlined onClick={() => handleLogout()} style={{
                        fontSize: '25px',
                        float: 'right',
                        marginRight: '60px',
                        color: '#252021',
                    }}/>
                </Col>
            </Row>
            <Row justify={'center'} style={{padding: "69px 0", minHeight: '69.1vh'}}>
                <Col span={20}>
                    <Table columns={columns} dataSource={data}/>
                </Col>
            </Row>
            <DefaultFooter/>
        </>
    );

}