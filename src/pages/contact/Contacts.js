import { contacts } from './constant';
import { Row, Col } from 'antd';

export const Contacts = () => {
  return (
    <>
      <Row style={{ width: "90%", paddingLeft: "20px", marginTop: "30px" }}>
        {contacts?.map((item) => {
          return (
            <Col key={item.id} span={12}>
              <p style={{ fontSize: "18px", color: "#8a2be2" }}>{item.id}</p>
              <p style={{ fontSize: "20px", }} > {item.text}</p>
            </Col>
          )
        })}
        <Col span={12}>
          <Col span={4}>
            <p style={{ fontSize: "18px", color: "#8a2be2" }}>Email</p>
          </Col>
          <Col style={{ fontSize: "20px"}}>
            <a href="mailto:info@topshop.am" style={{color:"#000000" }}>info@topshop.am</a>
          </Col>
        </Col>
        <Col>
          <Col>
            <p style={{ fontSize: "18px", color: "#8a2be2" }}>Phone</p>
          </Col>
          <Col style={{ fontSize: "20px", }} >
            < a href='tel: +374-12-887-888' style={{color:"#000000" }}> (374-12) 887 888</a>
          </Col>
        </Col>
      </Row>
    </>
  )
}