import {Col, Divider, Row} from "antd";

export const Total = ({price, total}) => {

    return (
        <Row justify={'center'} style={{background: '#dcdbdb', alignItems: 'center'}}>
            <Col span={12}>
                <p>Total:</p>
            </Col>
            <Col span={12}>
                <p>{total}</p>
            </Col>
            <Divider style={{margin: '5px 0'}}/>
        </Row>
    )
}