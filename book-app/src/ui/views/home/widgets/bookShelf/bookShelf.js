/* eslint-disable react/jsx-no-comment-textnodes */
import styled from 'styled-components';
import { Book } from './widgets/book';
import React from 'react';

export const BookShelf = ({data, books}) => {
  function isEmpty() {
    return Object.keys(data).length === 0;
  }

  return (
    <BSContainer>
      {
        (!isEmpty(data)) ?
          data.map((book, key) => {
            return (
              <Book key={key} cover={book.book.image} title={book.book.title} author={book.book.author} />
            );
          })
        :
          books.map((book, key) => {
            return (
              <Book key={key} cover={book.book.image} title={book.book.title} author={book.book.author} />
            );
          })
      }
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