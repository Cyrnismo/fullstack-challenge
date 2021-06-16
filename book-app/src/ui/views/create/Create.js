import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { TextInput } from './widgets/textInput';
import { AddBookBtn } from './widgets/addBookBtn';
import { Navbar } from '../../commom_widgets/navbar';
import { TextAreaInput } from './widgets/textAreaInput';



export default function Create() {
    let [title, onChangeTitle] = useState('');
    let [author, onChangeAuthor] = useState('');
    let [description, onChangeDesc] = useState('');

    const handleKeyPress = (event) => {
      if (event.keyCode === 'Enter' || event.keyCode === 13) {
        createNewBook();
      }

      if (event.key === 'Enter' || event.key === 13) {
        createNewBook();
      }
    };

    const createNewBook = useCallback(() => {
      console.log('createNewBook called!');
      var _url = "http://localhost:3001/api/books/add";

      const options = {
        method: 'POST',
        body: {
          book: {
            title: title,
            author: author,
            description: description
          }
        }
      }

      console.log(options.body);

      fetch(_url, options).then(
        async response => {
          try {
            const res = await response.json();
            console.log(res);
            onChangeTitle('');
            onChangeAuthor('');
            onChangeDesc('');
          } catch (error) {
            console.log('OMG! Error happened when adding book!');
            console.log(error);
          }
        }
      )
    }, [title, author, description])

    return (
        <Background>
            <Title>Add new book</Title>
            <TextInput label='Name' top='139px' value={title} onChange={onChangeTitle} />
            <TextInput label='Author' top='253px' value={author} onChange={onChangeAuthor} />
            <TextAreaInput label='Description' top='368px' value={description} onChange={onChangeDesc} />
            <AddBookBtn onKeyPress={handleKeyPress} createNewBook={createNewBook} />
            <Navbar name={title} author={author} description={description} />
        </Background>
    );
}

const Background = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0.5vw;
    width: 100%;
    height: 100%;
    box-shadow: inset 2.2px 2.2px 16px rgba(107, 103, 70, 0.5);
`;

const Title = styled.h1`
    position: absolute;
    width: 169px;
    height: 29px;
    top: 40px;

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #FF6978;
`;