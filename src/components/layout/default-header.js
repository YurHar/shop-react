import {Layout, Menu} from 'antd';
import HeaderLogo from './images/shop-logo.png'
import {NAVBAR} from "../../helpers/constant";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const {Header} = Layout;

export const DefaultHeader = () => {
    const [current, setCurrent] = useState('');
    const navigate = useNavigate();


    const onClick = (e) => {
        setCurrent(e.key);
        navigate(e.key, {state: e.key === "t-shirt/men" || e.key === "hoodie/men" ? 1 : 2});
    };

    return (
        <>
            <Header
                style={{
                    display: 'inline-table',
                    width: '100%',
                    background: "#958271",
                    textAlign: 'center',
                }}
            >
                <Menu
                    style={{
                        width: '100%'
                    }}
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    collapsedWidth={100}
                    items={NAVBAR}
                />
                <img src={HeaderLogo} alt="" style={{width: 150, marginTop: '20px'}}/>
            </Header>
        </>
    )
}