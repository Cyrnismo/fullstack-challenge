import React from 'react';
import styled from 'styled-components';
import background from '../../../../assets/images/background.png';

export const BGImage = () => {
    return (
        <ClipBorder>
            <SBGImage src={background} />
        </ClipBorder>
    );
}

const ClipBorder = styled.div`
    position: absolute;
    width: 375px;
    height: 282px;
    left: 3.2px;
    top: 2px;
    border-radius: 16px;
    z-index: 10;
    overflow: hidden;
`;

const SBGImage = styled.img`
    position: absolute;
    width: 375px;
    height: 282px;
    left: 0px;
    top: 0px;
    z-index: 0;
`;