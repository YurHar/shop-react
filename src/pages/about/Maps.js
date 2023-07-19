import { Contacts } from "./constant"
import { Col, Row } from "antd";

const contentStyle = {
  display: 'flex',
  width: '100%',
  height: "150px",
  justifyContent: 'center',
  marginBottom: "50px"
};

export const Maps = () => {

  return (
    <>
      <Row style={{ paddingLeft: "50px", paddingTop: "50px" }}>
        <Col span={6}>
          <h3 >Contacts</h3>
          {Contacts?.map((item) => {
            return (
              <Col key={item.id}>
                <p style={{ fontSize: "13px" }}>{item.text}</p>
              </Col>
            )
          })}
        </Col>
        <Col span={6} style={{ paddingRight: "50px" }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17243.
                    388875509707!2d44.496126475064344!3d40.18171017016213!2m3!1f0!2f0!3f0!3m2
                    !1i1024!2i768!4f13.1!3m3!1m2!1s0x406abda94d56d6a7%3A0xdf438bc9c991f857!2z0JTQs
                    NC70LzQsCDQk9Cw0YDQtNC10L0g0JzQvtC70Ls!5e0!3m2!1sru!2sam!4v1688824415229!5m2!1sru!2sam"
            width="800"
            height="150"
            style={{ border: 0, paddingTop: "15px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </Col>
      </Row>
    </>
  )
}