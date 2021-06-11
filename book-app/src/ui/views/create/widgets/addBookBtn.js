import React from 'react';
import styled from 'styled-components';

export const AddBookBtn = (onClick) => {
    return (
        <ABBtn onClick={onClick}>Add new book</ABBtn>
    );
}

const ABBtn = styled.button`
    position: absolute;
    width: 336px;
    height: 48px;
    left: 16px;
    top: 663px;
    border: none;

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #FFF;

    background: #FF6978;
    border-radius: 10px;
`;