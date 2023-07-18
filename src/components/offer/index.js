import {Col, Row} from "antd";
import TShirt from './images/t-shirt.png';
import {Link} from "react-router-dom";
import {DoubleRightOutlined} from "@ant-design/icons";

const contentStyle = {
    display: 'flex',
    width: '100%',
    height: 450,
    justifyContent: 'center',
    background: '#f5f5f5'
};

const linkStyle = {
    fill: '#fff',
    color: '#fff',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderColor: '#fff',
    paddingTop: '13px',
    paddingRight: '30px',
    paddingBottom: '13px',
    paddingLeft: '5px',
};

export const Offer = () => {

    return (
        <>
            <div style={contentStyle}>
                <Row>
                    <img src={TShirt} style={{width: 300, padding: 60}}/>
                </Row>
                <div style={{width: '30%', padding: 60, color: "#415161"}}>
                    <Row>
                        <h1>#COLOROFTHEMONTH</h1>
                    </Row>
                    <Row>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                            ullamcorper
                            mattis, pulvinar dapibus leo.
                        </p>
                    </Row>
                    <Row>
                        <h1>JUST $35!!!</h1>
                    </Row>
                </div>
            </div>
            <Row justify={'center'} style={{background: '#fddb35', minHeight: 150, alignItems: 'center'}}>
                <Col span={8}>
                    <h1 style={{color: '#ffffff'}}>GRAB THIS LIMITED TIME OFFER</h1>
                </Col>
                <Col span={6}>
                    <Link to={'/'} style={linkStyle}>ORDER NOW <DoubleRightOutlined /></Link>
                </Col>
            </Row>
        </>
    )
}