import {Col, Input, Row} from "antd";

export const Total = ({price, total}) => {

    console.log(price)
    console.log(total)

    return (
        <Row justify={'center'}>
            <Col span={12}>
                Total:
            </Col>
            <Col span={12}>
                <Input placeholder={total} bordered={false}/>
            </Col>
        </Row>
    )
}