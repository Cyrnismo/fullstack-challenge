import React from 'react';
import styled from 'styled-components';
import hooked from '../../../../assets/images/hooked.jpg';

export const BookCover = () => {
    return (
        <>
            <BCImage src={hooked} />
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
`;