import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { TextInput } from './widgets/textInput';
import { AddBookBtn } from './widgets/addBookBtn';
import { Navbar } from '../../commom_widgets/navbar';
import { TextAreaInput } from './widgets/textAreaInput';
import getRandomImage from '../../../utils/getRandomImage';

export default function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const image = getRandomImage();
  // const [submitted, setSubmitted] = useState(false);

  const addToShelf = () => {
    axios.post("http://localhost:3001/create", {
      title: title,
      author: author,
      description: description,
      image: image
    });
  }

  return (
      <Background>
          <Title>Add new book</Title>
          <Form>
            <TextInput label='Name' top='139px' name={"title"} onChange={(e) => setTitle(e)} />
            <TextInput label='Author' top='253px' name={"author"} onChange={(e) => setAuthor(e)} />
            <TextAreaInput label='Description' top='368px' name={"description"} onChange={(e) => setDescription(e)} />
          </Form>
          <AddBookBtn onClick={addToShelf} />
          <Navbar active={'create'} />
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

const Form = styled.div``;