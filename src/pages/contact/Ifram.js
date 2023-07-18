import { Row, Col, } from 'antd';

export const Iframe = () => {

    return (
        <>
            <Row style={{ marginTop: "30px" }}>
                <Col span={24}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17243.
                    388875509707!2d44.496126475064344!3d40.18171017016213!2m3!1f0!2f0!3f0!3m2
                    !1i1024!2i768!4f13.1!3m3!1m2!1s0x406abda94d56d6a7%3A0xdf438bc9c991f857!2z0JTQs
                    NC70LzQsCDQk9Cw0YDQtNC10L0g0JzQvtC70Ls!5e0!3m2!1sru!2sam!4v1688824415229!5m2!1sru!2sam"
                        width="1300"
                        height="300"
                        style={{ border: 0, marginBottom: "30px", marginLeft: "30px" }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </Col>
            </Row>
        </>
    )
}