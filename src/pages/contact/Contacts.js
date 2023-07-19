import { contacts } from './constant';
import { Row, Col } from 'antd';

export const Contacts = () => {
  return (
    <>
      <Row style={{ width: "90%", paddingLeft: "20px", marginTop: "30px" }}>
        {contacts?.map((item) => {
          return (
            <Col key={item.id} span={12}>
              <p style={{ fontSize: "18px", color: "blueviolet" }}>{item.id}</p>
              <p style={{ fontSize: "20px", }} > {item.text}</p>
            </Col>
          )
        })}
      </Row>
    </>
  )
}