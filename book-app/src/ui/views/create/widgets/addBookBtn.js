import React from 'react';
import styled from 'styled-components';

export const AddBookBtn = ({ handleKeyPress, createNewBook }) => {   
    return (
        <ABBtn onKeyPress={handleKeyPress} onClick={() => createNewBook()}>Add new book</ABBtn>
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
    cursor: pointer;
    box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.2637);

    background: #FF6978;
    border-radius: 10px;

    :hover {
        background: #d94352;
    }
`;