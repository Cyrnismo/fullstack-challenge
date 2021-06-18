import '../../../App.css';
import axios from 'axios';
import Fuse from 'fuse.js';
import styled from 'styled-components';
import { SearchBar } from './widgets/searchBar';
import { Navbar } from '../../commom_widgets/navbar';
import { UserGreetings } from './widgets/userGreetings';
import { RefreshButton } from './widgets/refreshButton';
import { BookShelf } from './widgets/bookShelf/bookShelf';
import React, { useState, useEffect, useCallback, useRef } from 'react';

export default function Home() {
  const observer = useRef();
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [pageNumber, setPageNumber] = useState(1);
  const lastBookElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        // setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    })
    if (node) observer.current.observe(node);
    console.log(node);
  }, [loading, hasMore]);

  const searchData = (pattern) => {
    // console.log(pattern);
    let matches = [];
    // setPageNumber(1);

    if (!pattern) {
      refreshList();
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
      refreshList();
    } else {
      result.forEach(({item}) => {
        matches.push(item);
      });
      setBooks(matches);
    }
  }

  const getBooks = useCallback((pageNumber) => {
    setLoading(true);

    axios({
      method: 'GET',
      url: 'http://localhost:3001/',
      params: {page: pageNumber},
    }).then((res) => {
      setBooks(prevState => {
        return [...prevState, ...res.data]
      })
      setHasMore(res.data.length > 0);
      setLoading(false);
    }).catch(e => {
      console.log(e);
    });
  }, [])

  const refreshList = () => {
    setBooks([]);
    getBooks();
    // setPageNumber(1);
  };

  useEffect(() => {
    // setPageNumber(1);
    getBooks();
  }, [getBooks])

  return(
      <Background>
          <SearchBar
            placeholder={"Let's jump into a new adventure!"}
            onChange={e => searchData(e.target.value)}
          />
          <UserGreetings />
          <RefreshButton onClick={() => refreshList()} />
          <BookShelf books={books} innerRef={lastBookElementRef} />
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

