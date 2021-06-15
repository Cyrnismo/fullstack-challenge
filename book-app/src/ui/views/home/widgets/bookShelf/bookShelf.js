/* eslint-disable react/jsx-no-comment-textnodes */
import styled from 'styled-components';
import { Book } from './widgets/book';
import React, { useEffect } from 'react';

export const BookShelf = ({data, books}) => {
    const renderBooks = () => {
      if (data) {
        data.map((book, key) => {
          return (
            <Book key={key} cover={book.book.image} title={book.book.title} author={book.book.author} />
          );
        })
      } else {
        books.map((book, key) => {
          return (
            <Book key={key} cover={book.book.image} title={book.book.title} author={book.book.author} />
          );
        })
      }
    }

    useEffect(() => {
        renderBooks();
    })

    return (
        <BSContainer>
            {renderBooks}
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