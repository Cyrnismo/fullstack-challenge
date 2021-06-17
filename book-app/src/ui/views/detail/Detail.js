import React, { useState } from 'react';
import styled from 'styled-components';
import { BGImage } from './widgets/bgImage';
import { BookCover } from './widgets/bookCover';
import { BookTitle } from './widgets/bookTitle';
import { BookAuthor } from './widgets/bookAuthor';
import { BackButton } from './widgets/backButton';
import { BookOptions } from './widgets/bookOptions';
import { BookDescription } from './widgets/bookDescription';


export default function Detail(props) {
  const initialBookState = {
    title: "",
    author: "",
    description: "",
    image: ""
  };
  const [currentBook, setCurrentBook] = useState(initialBookState);

/*   const getBook = id => {
  ShelfDataService.get(id)
    .then(response => {
      setCurrentBook(response.data);
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }; */
  
  /* useEffect(() => {
    getBook(props.match.params.id);
  }, [props.match.params.id]); */
  

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