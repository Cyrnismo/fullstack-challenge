import React from 'react';
import styled from 'styled-components';

export const BookCover = ({cover}) => {
    return (
        <>
            <BCImage src={cover} />
        </>
    );
}

const BCImage = styled.img`
    position: absolute;
    width: 151px;
    height: 234px;
    left: 113px;
    top: 84px;
    border: none;
    z-index: 9999;
`;