import React from 'react';
import styled from 'styled-components';

export const BookAuthor = ({author}) => {
    return (
        <BAContainer>
            <BAuthor>{author}</BAuthor>
        </BAContainer>
    );
}

const BAContainer = styled.div`
    position: absolute;
    width: 70px;
    height: 19px;
    left: 18px;
    top: 414px;
`;

const BAuthor = styled.h2`
    font-family: SFProDisplay;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.670588px;

    color: #FF6978;
`;