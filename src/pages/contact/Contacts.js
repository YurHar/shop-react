import React, { useState, useEffect } from 'react';
import { contacts } from './constant';
import { Row, Col } from 'antd';





export const Contacts = () => {

  return (
    <>
      <Row >
        {contacts?.map((item) => {
          return (
            <Col key={item.id}>
              <div style={{ width: "500px", height: "200px" }}>
                <p style={{ fontSize: "20px", marginLeft: "100px", color: "blueviolet" }}>{item.id}</p>
                <p style={{ fontSize: "25px", marginLeft: "100px" }} > {item.text}</p> </div>
            </Col>
          )
        })}
      </Row>
    </>
  )
}
