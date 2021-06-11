/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import hooked from '../../../../assets/images/hooked.jpg';

export const BookShelf = () => {
    return (
        //TODO: Implement auto fetch list view
        <BSContainer>
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />  
        </BSContainer>
    );
}

const BSContainer = styled.div`
    padding: 0.25rem;
    margin: 0.25rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    top: 21%;
    width: 100%;
    height: auto;
`;

const Book = () => {
    return (
        <BContainer>
            <BookCover />
            <BookTitle title='Book Title' />
            <BookAuthor author='Book Author' />
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

const BookCover = () => {
    return (
        <>
            <Link to='/detail'>
                <Image src={hooked}/>
            </Link>
        </>
    );
}

const Image = styled.img`
    display: block;
    width: 105px;
    height: 153px;
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
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: rgba(49, 49, 49, 0.8);
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