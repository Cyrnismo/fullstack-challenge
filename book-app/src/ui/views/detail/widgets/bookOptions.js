import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Headphones } from '@styled-icons/bootstrap';
import { BookOpen } from '@styled-icons/boxicons-regular';
import { ShareApple } from '@styled-icons/evil/ShareApple';

export const BookOptions = () => {
    return (
        <BOContainer>
            <ReadBtn />
            <ListenBtn />
            <ShareBtn />
        </BOContainer>
    );
}

const ReadBtn = () => {
    return (
        <BtnContainer to='/'>
            <BookOpen size={16} color={'#000'} />
            <BtnLabel>Read</BtnLabel>
        </BtnContainer>
    );
}

const ListenBtn = () => {
    return (
        <BtnContainer to='/'>
            <Headphones size={16} color={'#000'} />
            <BtnLabel>Listen</BtnLabel>
        </BtnContainer>
    );
}

const ShareBtn = () => {
    return (
        <BtnContainer to='/'>
            <ShareApple size={20} color={'#000'} />
            <BtnLabel>Share</BtnLabel>
        </BtnContainer>
    );
}

const BOContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 335px;
    height: 56px;
    left: 20px;
    top: 703px;
    box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
    border-radius: 2px;
    background: #FFF;
    box-sizing: border-box;
`;

const BtnContainer = styled(Link)`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
    width: 90px;
    height: 40px;
    padding-right: 10px;
    box-sizing: border-box;
    text-decoration: none;
`;

const BtnLabel = styled.h3`
    margin-left: 0.4rem;
    width: 30px;
    height: auto;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 1px;
    color: #3F4043;
`;