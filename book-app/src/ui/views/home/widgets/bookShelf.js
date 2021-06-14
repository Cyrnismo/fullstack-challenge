/* eslint-disable react/jsx-no-comment-textnodes */
import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import hooked from '../../../../assets/images/hooked.jpg';

export const BookShelf = () => {
    let [books, setBooks] = useState([]);
    let [activeBook, setActiveBook] = useState('');


    const getBooksWithAxios = useCallback(() => {
        var _url = 'http://192.168.0.110:3001/api/books';

        const axiosResponse = axios.get({ method: 'get', url: _url }).then(
            async response => {
                try {
                const data = await response.json();
                console.log('response data?', data);
                // setBooks(data);
                } catch (error) {
                    console.log('Error Axios!');
                    console.log(error);
                }
            }
        );
        return axiosResponse;
    }, []);

    const getBooks = useCallback(() => {
        var url = 'http://192.168.0.110:3001/api/books';

        fetch(url, { method: 'GET'} ).then(
            async response => {
                try {
                    const data = await response.json();
                    console.log('response data?', data)
                    // setBooks(data);
                } catch (error) {
                    console.log('Error happened here!')
                    console.log(error);
                }
            }
        )
    }, [])

    /* useEffect(() => {
        getBooksWithAxios()
        getBooks()
    }, [getBooksWithAxios, getBooks]);
 */
    return (
        <BSContainer>
            {/* {books.map((book, key) => {
                return (
                    <Book key={key}  cover={book.image} title={book.title} author={book.author} description={book.description} onClick={() => {setActiveBook(book._id)}} />
                );
            })} */}
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
    box-shadow: 2px 2px 23px rgba(107, 103, 70, 0.125901);
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