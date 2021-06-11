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
    top: 443px;
    text-align: left;
`;

const BDescription = styled.p`
    font-family: SFProText;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0.2px;
    color: rgba(49, 49, 49, 0.6);
`;