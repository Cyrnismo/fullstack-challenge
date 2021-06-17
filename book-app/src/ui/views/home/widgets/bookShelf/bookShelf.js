/* eslint-disable react/jsx-no-comment-textnodes */
import styled from 'styled-components';
import { Book } from './widgets/book';
import React from 'react';

export const BookShelf = ({books}) => {
  return (
    <BSContainer>
      {books && books.map((book, index) => {
        return (
          <Book key={index} cover={book.image} title={book.title} author={book.author} />
        );
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
    position: relative;
    top: 21%;
    width: 100%;
    height: 563px;
    overflow-x: auto;
`;