import '../../../App.css';
import axios from 'axios';
import Fuse from 'fuse.js';
import styled from 'styled-components';
import { SearchBar } from './widgets/searchBar';
import React, { useState, useEffect } from 'react';
import { Navbar } from '../../commom_widgets/navbar';
import { UserGreetings } from './widgets/userGreetings';
import { BookShelf } from './widgets/bookShelf/bookShelf';

export default function Home() {
  const [books, setBooks] = useState([]);
  // const [currentBook, setCurrentBook] = useState([]);

  const searchData = (pattern) => {
    // console.log(pattern);
    let matches = [];

    if (!pattern) {
      setBooks(books);
      return;
    }

    const options = {
      includeScore: true,
      keys: ['title', 'author']
    }


    const fuse = new Fuse(books, options);
    const result = fuse.search(pattern);
    // console.log(result);

    if (!result.length) {
      setBooks([]);
    } else {
      result.forEach(({item}) => {
        matches.push(item);
      });
      setBooks(matches);
    }
  }

  const getBooks = () => {
    axios.get("http://localhost:3001/").then((res) => {
      console.log("getBooks(): ", res.data);
      setBooks(res.data);
    });
  }

  const refreshList = () => {
    getBooks();
  };

  useEffect(() => {
    getBooks()
  }, [])

  return(
      <Background>
          <SearchBar
            placeholder={"Let's jump into a new adventure!"}
            onChange={e => searchData(e.target.value)}
          />
          <UserGreetings />
          <RefreshButton />
          <BookShelf books={books} />
          <Navbar />
      </Background>
  );
}

const Background = styled.div`
    margin: 0;
    padding: 0.5vw;
    width: 100%;
    height: 100%;
    box-shadow: inset 2.2px 2.2px 16px rgba(107, 103, 70, 0.5);
`;

