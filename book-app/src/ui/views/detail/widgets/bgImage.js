import React from 'react';
import styled from 'styled-components';
import background from '../../../../assets/images/background.png';

export const BGImage = () => {
    return (
        <>
            <SBGImage src={background} />
        </>
    );
}

const SBGImage = styled.img`
    position: absolute;
    width: 375px;
    height: 282px;
    left: 2px;
    top: 2px;
`;