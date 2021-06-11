import React from 'react';
import styled from 'styled-components';

export const BookTitle = ({title}) => {
    return (
        <BTContainer>
            <BTitle>{title}</BTitle>
        </BTContainer>
    );
}

const BTContainer = styled.div`
    position: absolute;
    width: 335px;
    height: 58px;
    left: 20px;
    top: 349px;
    text-align: left;
`;

const BTitle = styled.h1`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 1.5px;
    color: #36383A;
`;