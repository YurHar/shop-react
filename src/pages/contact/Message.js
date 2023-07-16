import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input, Row, Col, Button } from 'antd';

const inputStyle = {
  width: "80%",
  marginLeft: "100px",
  marginBottom: "50px",
  border: "3px solid #ccc"
}

export const Message = () => {

  const { TextArea } = Input;
  const onChange = (e) => {
    console.log('Change:', e.target.value);
  };

  return (
    <>
      <Row >
        <Col span={12}>
          <Input style={inputStyle} size="large" placeholder="Full Name" prefix={<UserOutlined />} />
        </Col>
        <Col span={11}>
          <Input style={{ width: "81%", border: "3px solid #ccc" }} size="large" placeholder="Subject" prefix={<UserOutlined />} />
        </Col>
        <Col span={24}>
          <Input style={inputStyle} size="large" placeholder="Email" prefix={<UserOutlined />} />
        </Col>

        <TextArea showCount maxLength={200} onChange={onChange} placeholder="Message"
          style={{ height: "200px", resize: 'none', width: "80%", marginBottom: "50px", marginLeft: "100px", border: "3px solid #ccc" }}
        />

        <Button type='primary' style={{ width: "150px", height: "75px", marginLeft: "100px", marginBottom: "50px", fontSize: "30px" }}>
          SEND </Button>

      </Row>

    </>



  )
}










