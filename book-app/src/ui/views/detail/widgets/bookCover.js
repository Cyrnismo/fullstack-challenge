import React from 'react';
import styled from 'styled-components';

export const BookCover = ({image}) => {
    console.log(image);

    return (
        <>
            <BCImage src={image} />
        </>
    );
}

const BCImage = styled.img`
    display: block;
    position: absolute;
    width: 151px;
    height: 234px;
    left: 113px;
    top: 84px;
    border: none;
    z-index: 9999;
`;