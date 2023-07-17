import React, { useState, useEffect } from 'react';
import { Select, Row, Col } from 'antd';
import MainContent from '../../components/layout/main-content';
import { SearchInput } from './Search';
import { Body } from './Body';

export const Faq = () => {
    const [input, setInput] = useState("")

    const handleInput = (value) => {
        setInput(value)
    }

    return (
        <>
            <MainContent>
                <SearchInput handleInput={handleInput} />
                <Body input={input} />
            </MainContent>
        </>
    )
}







