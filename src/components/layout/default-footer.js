import {Button, Col, Layout, Row} from 'antd';
import {Link} from "react-router-dom";
import {FacebookOutlined, GoogleOutlined, InstagramOutlined, YoutubeOutlined} from "@ant-design/icons";

const {Footer} = Layout;

const footerStyle = {
    background: '#415161'
}

const buttonStyle = {
    fontSize: '25px',
    height: '50px',
    margin: 10,
}

export const DefaultFooter = () => {

    return (
        <Footer style={footerStyle}>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Row gutter={[16, 16]} style={{textAlign: 'center'}}>
                        <Col span={24}>
                            <Link to={'/'} style={{fontSize: 20, color: '#ffffff'}}>Home</Link>
                        </Col>
                        <Col span={24}>
                            <Link to={'/'} style={{fontSize: 20, color: '#ffffff'}}>About</Link>
                        </Col>
                    </Row>
                </Col>
                <Col span={12}>
                    <Button style={buttonStyle}><Link to={'/'}><FacebookOutlined/></Link></Button>
                    <Button style={buttonStyle}><Link to={'/'}><InstagramOutlined/></Link></Button>
                    <Button style={buttonStyle}><Link to={'/'}><YoutubeOutlined/></Link></Button>
                    <Button style={buttonStyle}><Link to={'/'}><GoogleOutlined/></Link></Button>
                </Col>
            </Row>
        </Footer>
    )
}