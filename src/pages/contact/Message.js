import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input, Row, Col, Button } from 'antd';

export const Message = () => {
  const [inputName, setInputName] = useState("")
  const [inputSurname, setInputSurname] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [inputMessage, setInputMessage] = useState("")

  const { TextArea } = Input;

  const handleNameChange = (e) => {
    setInputName(e.target.value)
  }
  const handleSurnameChange = (e) => {
    setInputSurname(e.target.value)
  }
  const handleEmailChange = (e) => {
    setInputEmail(e.target.value)
  }
  const handleMessageChange = (e) => {
    setInputMessage(e.target.value)
  }
  return (
    <>
      <Row style={{
        width: "90%",
        paddingRight: "20px",
        marginRight: "200px",
        marginTop: "30px"
      }} >
        <Row>
          <Col span={12}>
            <Input size="large" type='text' onChange={handleNameChange} placeholder="Name"
              value={inputName} prefix={<UserOutlined />}
              style={{
                width: "250px",
                border: "3px solid #ccc"
              }} />
          </Col>

          <Col span={12} style={{ paddingLeft: "56px" }}>
            <Input size="large" type='text' placeholder="Surname" prefix={<UserOutlined />}
              value={inputSurname} onChange={handleSurnameChange}
              style={{
                width: "250px",
                border: "3px solid #ccc"
              }} />
          </Col>

        </Row>
        <Row style={{ marginTop: "30px" }}>
          <Col span={24}> <Input style={{ border: "3px solid #ccc" }} size="large" type='Email'
            value={inputEmail} onChange={handleEmailChange} placeholder="Email" prefix={<UserOutlined />} />
          </Col>

          <Col span={24} style={{ marginTop: "30px" }}>
            <TextArea showCount maxLength={200} placeholder="Message" value={inputMessage}
              onChange={handleMessageChange}
              style={{
                resize: 'none',
                width: "585px",
                height: "150px",
                border: "3px solid #ccc"
              }} />
          </Col>

          <Col span={6} style={{ marginTop: "30px" }}>
            <Button type='primary' style={{
              width: "100px",
              height: "50px",
              fontSize: "18px"
            }} >SEND </Button>
          </Col>
        </Row>
      </Row>
    </>
  )
}