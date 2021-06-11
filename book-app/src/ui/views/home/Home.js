import React from 'react';
import styled from 'styled-components';
import {SearchBar} from './widgets/searchBar';
import { BookShelf } from './widgets/bookShelf';
import { UserGreetings } from './widgets/userGreetings';
import { Navbar } from '../../commom_widgets/navbar';

export default function Home() {
    return(
        <Background>
            <SearchBar />
            <UserGreetings />
            <BookShelf />
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

