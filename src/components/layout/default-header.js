import {Layout, Menu} from "antd";
import HeaderLogo from "./images/shop-logo.png";
import {NAVBAR} from "../../helpers/constant";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {DrawerMenu} from "../drawer";

const {Header} = Layout;

export const DefaultHeader = () => {
    const [current, setCurrent] = useState("");
    const navigate = useNavigate();

    const onClick = (e) => {
        setCurrent(e.key);
        navigate(e.key, {
            state: e.key === "/clothing/men" || e.key === "/accessories/electronics" ? 1 : 2,
        });
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
                        width: "94%",
                        position: "fixed",
                        zIndex: '999',
                        background: '#f3ecec',
                    }}
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    collapsedWidth={100}
                    items={NAVBAR}
                />
                <DrawerMenu/>
                <img src={HeaderLogo} alt="" style={{width: 150, marginTop: '80px'}}/>
            </Header>
        </>
    )
}