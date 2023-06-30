import MainContent from "../../components/layout/main-content";
import {LoginForm} from "./login-form";
import {InformationBanner} from "./information-banner";
import {Col, Row} from "antd";

export const Login = () => {

    return (
        <MainContent>
            <Row justify={'center'} style={{padding: 50}}>
                <Col span={16}>
                    <Row style={{width: '100%', boxShadow: '5px 10px #888888'}}>
                        <Col span={10}>
                            <LoginForm />
                        </Col>
                        <Col span={14}>
                            <InformationBanner />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </MainContent>
    );
}