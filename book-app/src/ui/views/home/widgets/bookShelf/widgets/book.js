import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Book = ({cover, title, author}) => {
    return (
        <BContainer>
            <BookCover cover={cover} />
            <BookTitle title={title} />
            <BookAuthor author={author} />
        </BContainer>
    );
}

const BContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    margin-right: 0.75rem;
    margin-bottom: 0.75rem;
    flex-direction: column;
    width: 105px;
    height: 190px;
`;

const BookCover = ({cover}) => {
    return (
        <>
            <Link to='/detail'>
                <Image src={cover}/>
            </Link>
        </>
    );
}

const Image = styled.img`
    display: block;
    width: 105px;
    height: 153px;
    box-shadow: 2px 2px 23px rgba(107, 103, 70, 0.3241);
`;

const BookTitle = ({title}) => {
    return (
        <BTContainer>
            <BTitle>{title}</BTitle>
        </BTContainer>
    );
}

const BTContainer = styled.div`
    position: relative;
    margin-left: 0px;
    margin-right: auto;
    height: 14px;
`;

const BTitle = styled.h2`
    text-align: left;
    width: 120px;
    height: 12px;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: rgba(49, 49, 49, 0.8);
    overflow: hidden;
`;

const BookAuthor = ({author}) => {
    return (
        <BAContainer>
            <AuthorName>{author}</AuthorName>
        </BAContainer>
    );
}

const BAContainer = styled.div`
    position: relative;
    margin-left: 0px;
    margin-right: auto;
    height: 12px;
`;

const AuthorName = styled.h3`
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 10px;
    line-height: 12px;
    color: rgba(49, 49, 49, 0.8);
`;