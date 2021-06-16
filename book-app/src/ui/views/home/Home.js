import '../../../App.css';
import Fuse from 'fuse.js';
import styled from 'styled-components';
import { SearchBar } from './widgets/searchBar';
import { Navbar } from '../../commom_widgets/navbar';
import { UserGreetings } from './widgets/userGreetings';
import { BookShelf } from './widgets/bookShelf/bookShelf';
import React, { useState, useEffect, useCallback } from 'react';

export default function Home() {
  let [data, setData] = useState([]);
  let [books, setBooks] = useState([]);

    const searchData = (pattern) => {
      // console.log(pattern);
      let matches = [];

      if (!pattern) {
        setData(books);
        return;
      }

      const options = {
        includeScore: true,
        keys: ['book.title', 'book.author']
      }


      const fuse = new Fuse(books, options);
      const result = fuse.search(pattern);
      // console.log(result);

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
            const books = await response.json();
            // console.log(books);
            setBooks(books);
          } catch (error) {
            console.log('OMG! Error happened while fetching books!')
            console.log(error);
          }
        }
      )
    }, [])

    useEffect(() => {
        getBooks()
    }, [getBooks])
    
    return(
        <Background>
            <SearchBar
              placeholder={"Let's jump into a new adventure!"}
              onChange={e => searchData(e.target.value)}
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
    box-shadow: inset 2.2px 2.2px 16px rgba(107, 103, 70, 0.5);
`;

