import styled from 'styled-components';
import React, { useState } from 'react';

export const TextAreaInput = ({label, top}) => {
    const [text, onChangeText] = useState('');

    return (
        <TAContainer top={top}>
            <Label label={label}/>
            <InputArea value={text} onChangeText={onChangeText} />
        </TAContainer>
    );
}

const TAContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    position: absolute;
    width: 336px;
    height: 250px;
    left: 20px;
    top: ${(props) => props.top};
`;

const Label = ({label}) => {
    return (
        <>
            <SLabel>{label}</SLabel>
        </>
    );
}

const SLabel = styled.span`
    position: relative;
    margin-right: auto;
    margin-left: 0px;
    width: 46px;
    height: 18px;
    font-family: SFProText;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
    color: #000000;
`;

const InputArea = (text, onChangeText) => {
    return (
        <>
            <SInputArea text={text} onChangeText={onChangeText} />
        </>
    );
}

const SInputArea = styled.textarea`
    margin-top: 0.25rem;
    padding: 1rem 1rem;
    width: 100%;
    height: 100%;
    font-size: 18px;
    border: none;
    box-sizing: border-box;
    outline: #F0F0F0;
    background: #FDFCFC;
    border-radius: 10px;
    resize: none;

    inputArea::active,
    inputArea::focus {
        border: none;
    }
`;