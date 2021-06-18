import React from 'react';
import styled from 'styled-components';

function breakLine({description}) {
    const str = `${description}`;
    const arr = str.split(/<br \/>/);
    const resultArr = [];
    arr.forEach((item, i) => {
      if(i%1===0) resultArr.push(<br />);
      resultArr.push(item);      
    });
    return (
      <p> {resultArr} </p>
    );
}

export const BookDescription = (description) => {
    return (
        <BDContainer>
            <BDescription>{breakLine(description)}</BDescription>
        </BDContainer>
    );
}

const BDContainer = styled.div`
    position: absolute;
    width: 335px;
    height: 275px;
    left: 20px;
    top: 463px;
    text-align: left;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none; /* for Chrome, Safari, and Opera */
    }
`;

const BDescription = styled.p`
    margin-top: -30px;
    font-family: SFProText;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0.2px;
    color: rgba(49, 49, 49, 0.6);
`;