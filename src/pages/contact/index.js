import React, { useState, useEffect } from 'react';
import MainContent from '../../components/layout/main-content';
import { Contacts } from './Contacts';
import { Message } from './Message';
import {Row,Col}  from 'antd'
import {Iframe} from './Ifram'

export const ContactsUs = () => {

  return (
    <>
      <MainContent>
        <Row>
          <Col span={12}>   <Contacts />  </Col>
          <Col span={12}>   <Message /> </Col>
        </Row>
        <Iframe/>
      </MainContent>
    </>
  )
}
