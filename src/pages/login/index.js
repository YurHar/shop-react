import MainContent from "../../components/layout/main-content";
import {LoginForm} from "./login-form";
import {InformationBanner} from "./information-banner";
import {Col, Row} from "antd";

const defaultStyle = {
    width: '100%',
    boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'
}

export const Login = () => {

    return (
        <MainContent>
            <Row justify={'center'} style={{padding: 50}}>
                <Col span={16}>
                    <Row style={defaultStyle}>
                        <Col span={10}>
                            <LoginForm/>
                        </Col>
                        <Col span={14}>
                            <InformationBanner/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </MainContent>
    );
}