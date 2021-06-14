import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

export const AddBookBtn = (bookTitle, bookAuthor, bookDescription) => {
    const [title, setTitle] = useState(bookTitle);
    const [author, setAuthor] = useState(bookAuthor);
    const [description, setDesc] = useState(bookDescription);
    
    const addBookWithAxios = useCallback((bookTitle, bookAuthor, bookDescription) => {
        var _url = 'http://192.168.0.110:3001/api/books/add';

        const axiosResponse = axios.post({ method: 'post', url: _url, data: {
            book: {
                title: bookTitle,
                author: bookAuthor,
                description: bookDescription
            }
        }}).then(() => {
            setTitle('');
            setAuthor('');
            setDesc('');
        });
    }, []);

    const addBook = useCallback((bookTitle, bookAuthor, bookDescription) => {
        var _url = 'http://192.168.0.110:3001/api/books/add';
        
        fetch(_url, {
            method: 'POST',
            body: JSON.stringify({
              book: { bookTitle, bookAuthor, bookDescription }
            })
        })
        .then(() => {
        setTitle('');
        setAuthor('');
        setDesc('');
        // setModalVisible(true)
        })
    }, [])

    useEffect((title, author, description) => {
        addBookWithAxios(title, author, description)
        addBook(title, author, description)
    }, [addBookWithAxios, addBook]);


    return (
        <ABBtn onClick={addBook(title, author, description)}>Add new book</ABBtn>
    );
}

const ABBtn = styled.button`
    position: absolute;
    width: 336px;
    height: 48px;
    left: 16px;
    top: 663px;
    border: none;

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #FFF;
    box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);

    background: #FF6978;
    border-radius: 10px;
`;