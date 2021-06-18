import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BGImage } from './widgets/bgImage';
import { BookCover } from './widgets/bookCover';
import { BookTitle } from './widgets/bookTitle';
import { BookAuthor } from './widgets/bookAuthor';
import { BackButton } from './widgets/backButton';
import { BookOptions } from './widgets/bookOptions';
import { BookDescription } from './widgets/bookDescription';


export default function Detail(props) {
  const { id } = props.location.state;
  console.log(id); 
  
  const initialBookState = {
    title: props.title,
    author: props.author,
    description: props.description,
    image: props.image
  };
  const [currentBook, setCurrentBook] = useState(initialBookState);
  // const [loading, setLoading] = useState(false);
  
  const getBookById = useCallback(() => {
    // setLoading(true);
    axios({
      method: 'GET',
      url: `http://localhost:3001/detail/${id}`
    }).then((res) => {
      // console.log(res.data)
      setCurrentBook(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [id])

  useEffect(() => {
    getBookById()
  }, [getBookById]);

  return(
    <Background>    
      <BGImage />
      <BackButton />
      <BookCover image={currentBook.image} />
      <BookTitle title={currentBook.title} />
      <BookAuthor author={currentBook.author} />
      <BookDescription description={currentBook.description} />
      <BookOptions />
    </Background>
  );
}

const Background = styled.div`
  margin: 0;
  padding: 0.5vw;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: #FFF;
  box-shadow: inset 2.2px 2.2px 16px rgba(107, 103, 70, 0.5);
`;