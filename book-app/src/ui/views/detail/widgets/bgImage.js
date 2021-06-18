import React from 'react';
import styled from 'styled-components';
import background from '../../../../assets/images/background/background.png';
import oval from '../../../../assets/images/background/oval.png';
import ovalOne from '../../../../assets/images/background/oval-1.png';
import ovalTwo from '../../../../assets/images/background/oval-2.png';
import ovalThree from '../../../../assets/images/background/oval-3.png';
import ovalFour from '../../../../assets/images/background/oval-4.png';

export const BGImage = () => {
    return (
        <ClipBorder>
            <SBGImage src={background} />
            <Oval src={oval} />
            <OvalOne src={ovalOne} />
            <OvalTwo src={ovalTwo} />
            <OvalThree src={ovalThree} />
            <OvalFour src={ovalFour} />
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

const Oval = styled.img`
    position: absolute;
    width: 100px;
    height: 100px;
    left: 292.82px;
    top: -14.45px;
    transform: rotate(25deg);
    z-index: 10;
`;

const OvalOne = styled.img`
    position: absolute;
    width: 24px;
    height: 24px;
    left: 248px;
    top: 86px;
    z-index: 10;
`;

const OvalTwo = styled.img`
    position: absolute;
    width: 15px;
    height: 15px;
    left: 46px;
    top: 125px;
    z-index: 10;
`;

const OvalThree = styled.img`
    position: absolute;
    width: 48px;
    height: 48px;
    left: 242.39px;
    top: 218.11px;
    z-index: 10;
    transform: rotate(25deg);
`;

const OvalFour = styled.img`
    position: absolute;
    width: 63px;
    height: 63px;
    left: 73px;
    top: 115px;
    z-index: 10;
`;