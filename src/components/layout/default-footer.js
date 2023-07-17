import { Col, Layout, Row } from 'antd';
import { Link } from "react-router-dom";
import { FacebookOutlined, GoogleOutlined, InstagramOutlined, YoutubeOutlined } from "@ant-design/icons";
import FooterLogo from './images/shop-logo.png'
import { Contacts } from '../image-carousel/constant';
import { useState, useEffect } from 'react';
import { Avatar, Space } from 'antd';
import React from 'react';

const { Footer } = Layout;

const footerStyle = {
    background: "#958271",
    display: "flex",
    justifyContent: 'space-between',
};

const buttonStyle = {
    fontSize: "20px",
    color: "#958271"
};

const LinkStyle = {
    fontSize: 16,
    color: '#ffffff',
};

export const DefaultFooter = () => {
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    const handleMouseEnter = e => {
        e.target.style.fontWeight = "bold";
        setIsHover(true)
    };

    const handleMouseLeave = e => {
        e.target.style.fontWeight = "normal";
        setIsHover(false)
    };
    return (
        <Footer style={footerStyle}>
            <img src={FooterLogo} alt=""
                style={{
                    width: "200px",
                    height: "100px",
                    paddingLeft: "100px",
                    paddingTop: "30px"
                }} />
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <Row gutter={[16, 16]}>
                        <h3 style={{ color: '#ffffff' }}>Site Map</h3>
                        <Col span={24}>
                            <Link to={'/'} style={LinkStyle} onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave} > Home</Link>
                        </Col>
                        <Col span={24}>
                            <Link to={'/about'} style={LinkStyle} onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>
                                About</Link>
                        </Col>
                        <Col span={24}>
                            <Link to={'/Faq'} style={LinkStyle} onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>
                                FAQ</Link>
                        </Col>
                    </Row>
                </Col>
                <Col span={8}>
                    <Row gutter={[16, 16]} >
                        <h3 style={{ color: '#ffffff' }}>Contact</h3>
                        <Col span={24}>
                            <Link to={'/Contacts'} style={LinkStyle} onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>
                                Contact Us</Link>
                        </Col>
                        {Contacts?.map((item) => {
                            return (
                                <Col key={item.id}
                                    style={{
                                        fontSize: "13px",
                                        color: "#ffffff",
                                    }} >
                                    {item.text}
                                </Col>
                            )
                        })}
                    </Row>
                </Col>
                <Col span={8}>
                    <Row>
                        <Col span={24}>
                            <h3 style={{ color: '#ffffff', marginLeft: "20px" }}>
                                Follow Us on Socials</h3><Space direction="horizontal" size={16}>
                                <Space wrap size={16}>
                                    <Avatar size={40}
                                        style={{ backgroundColor: "#ffffff" }} >
                                        <Link to={'/'}> <FacebookOutlined style={buttonStyle} /> </Link>
                                    </Avatar>
                                    <Avatar size={40} style={{ backgroundColor: "#ffffff" }} >
                                        <Link to={'/'}> <InstagramOutlined style={buttonStyle} /></Link>
                                    </Avatar>
                                    <Avatar size={40} style={{ backgroundColor: "#ffffff" }} >
                                        <Link to={'/'}><YoutubeOutlined style={buttonStyle} /> </Link>
                                    </Avatar>
                                    <Avatar size={40} style={{ backgroundColor: "#ffffff" }} >
                                        <Link to={'/'}><GoogleOutlined style={buttonStyle} /></Link>
                                    </Avatar>
                                </Space>
                            </Space>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Footer>
    )
}









