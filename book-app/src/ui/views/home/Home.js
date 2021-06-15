import '../../../App.css';
import axios from 'axios';
import Fuse from 'fuse.js';
import styled from 'styled-components';
import {SearchBar} from './widgets/searchBar';
import { Navbar } from '../../commom_widgets/navbar';
import { UserGreetings } from './widgets/userGreetings';
import { BookShelf } from './widgets/bookShelf/bookShelf';
import React, { useState, useEffect, useCallback } from 'react';

export default function Home() {
    let [books, setBooks] = useState([]);
    let [data, setData] = useState([]);

    const onKeyDownHandler = e => {
      if (e.keyCode === 13) {
          searchData(e);
      }
    };

    const searchData = (pattern) => {
      const matches = [];

      if (!pattern) {
        setData(books);
        return;
      }

      const fuse = new Fuse(books.books, {
        keys: ['title', 'author'],
      });

      const result = fuse.search(pattern);
      if (!result.length) {
        setData([]);
      } else {
        result.forEach(({item}) => {
          matches.push(item);
        });
        setData(matches);
      }
    }

    const getBooks = useCallback(() => {
        var _url = 'http://localhost:3001/api/books';

        fetch(_url, { method: 'GET'} ).then(
            async response => {
                try {
                    const data = await response.json();
                    console.log(data);
                    setBooks(books);
                    setData(data);
                } catch (error) {
                    console.log('OMG! Error happened here!')
                    console.log(error);
                }
            }
        )
    }, [books])

    useEffect(() => {
        getBooks()
    }, [getBooks])
    
    return(
        <Background>
            <SearchBar
              placeholder={"Let's jump into a new adventure!"}
              onChange={e => searchData(e.target.value)}
              onKeyDownHandler={onKeyDownHandler}
            />
            <UserGreetings />
            <BookShelf books={books} data={data} />
            <Navbar />
        </Background>
    );
}

const Background = styled.div`
    margin: 0;
    padding: 0.5vw;
    width: 100%;
    height: 100%;
`;

