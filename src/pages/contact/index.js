import React, { useState, useEffect } from 'react';
import MainContent from '../../components/layout/main-content';
import { Contacts } from './Contacts';
import { Message } from './Message';






export const ContactsUs = () => {

  return (
    <>
      <MainContent>
        <Contacts />
        <Message />
      </MainContent>
    </>



  )
}








