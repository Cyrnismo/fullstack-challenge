/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import styled from 'styled-components';
import { Book } from './widgets/book';

export const BookShelf = ({books, lastBookElementRef}) => {
  return (
    <BSContainer>
      {books && books.map((book, index) => {
        if (books.length === index + 1) {
          return (
            <Book key={index} id={book._id} cover={book.image} title={book.title} author={book.author} innerRef={lastBookElementRef} />
          );
        } else {
          return (
            <Book key={index} id={book._id} cover={book.image} title={book.title} author={book.author} />
          );
        }
      })}
    </BSContainer>
  );
}

const BSContainer = styled.div`
  padding: 0.25rem;
  margin: 0.25rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  position: relative;
  top: 21%;
  left: -10px;
  padding-top: 20px;
  padding-left: 16px;
  padding-bottom: 40px;
  width: 94%;
  height: 546px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border-radius: 16px 16px 16px 0px;
  box-shadow: inset 2.2px 2.2px 16px rgba(107, 103, 70, 0.1293);

  &::-webkit-scrollbar {
    display: none;
  }
`;