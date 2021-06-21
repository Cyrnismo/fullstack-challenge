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
  const [limit, setLimit] = useState(9);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(0);
  const [loading, setLoading] = useState(false);

  const nextPage = useCallback((skip, limit) => {
    setSkip(skip + limit);
  }, [])

  const getBooks = useCallback((limit, skip) => {
    let cancel;
    setLoading(true);

    axios({
      method: 'GET',
      url: 'http://localhost:3001/',
      params: {
        limit: limit,
        skip: skip
      },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then((res) => {
      //! Still having some issues with pagination duplicating last books ;(
      setHasMore(res.data.length);
      if (hasMore === 0) { return }
      else limit = hasMore;

      setBooks(prevState => {
        return [...prevState, ...res.data]
      });

      nextPage(skip, limit);
      setLoading(false);
    }).catch(e => {
      if (axios.isCancel(e)) return;
      console.log(e);
    });
    return () => cancel();
  }, [hasMore, nextPage])

  const lastBookElementRef = useCallback(  // (*)
    (node) => {
      if (loading || (hasMore === 0)) { return; }
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && (hasMore > 0)) {
          getBooks(limit, skip);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, getBooks, limit, skip]
  );

  const searchData = (pattern) => {
    // console.log(pattern);
    let matches = [];

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

  const refreshList = () => {
    setBooks([]);
    setSkip(0);
    getBooks(limit, skip);
  };

  useEffect(() => {
    getBooks(limit, skip);
  }, [getBooks, limit, skip])

  return(
      <Background>
          <SearchBar
            placeholder={"Let's jump into a new adventure!"}
            onChange={e => searchData(e.target.value)}
          />
          <UserGreetings />
          <RefreshButton onClick={() => refreshList()} />
          <BookShelf books={books} lastBookElementRef={lastBookElementRef} />
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

