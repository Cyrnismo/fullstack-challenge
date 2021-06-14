import React from 'react';
import '../../../../App.css';
import styled from 'styled-components';
import Emojis from 'react-emoji-component';

export const UserGreetings = () => {
    return (
        <UGContainer>
            <Title>Hi, <span>Mahmed Al Fatih</span></Title>
            <Emojis size={24}>
            👋
            </Emojis>   
        </UGContainer>
    );
}

const UGContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    position: absolute;
    width: 260px;
    height: 32px;
    left: 19px;
    top: 128px;
`;

const Title = styled.h1`
    margin-right: 10px;
    font-family: SF Pro Display, SF Pro Text;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    color: #54565A;

    span {
        color: #FF6978;
    }
`;