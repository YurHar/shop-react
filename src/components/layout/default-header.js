import { Layout, Menu} from 'antd';
import HeaderLogo from './images/shop-logo.png'
import {NAVBAR} from "../../helpers/constant";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
const { Header } = Layout;

export const DefaultHeader = () => {
    const [current, setCurrent] = useState('');
    const navigate = useNavigate();


    const onClick = (e) => {
        setCurrent(e.key);
        navigate(e.key);
    };

    return (
        <>
            <Header
                style={{
                    display: 'inline-table',
                    width: '100%',
                    background: "#958271",
                }}
            >
                <img src={HeaderLogo} alt="" style={{width: 150, marginTop: '20px'}}/>
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    collapsedWidth={150}
                    items={NAVBAR}
                />
            </Header>
        </>
    )
}