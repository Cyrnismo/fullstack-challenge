import React from 'react';
import styled from 'styled-components';
import { BGImage } from './widgets/bgImage';
import { BookCover } from './widgets/bookCover';
import { BookTitle } from './widgets/bookTitle';
import { BookAuthor } from './widgets/bookAuthor';
import { BackButton } from './widgets/backButton';
import { BookOptions } from './widgets/bookOptions';
import { BookDescription } from './widgets/bookDescription';


export default function Detail() {
    return(
        <Background>    
            <BGImage />
            <BackButton />
            <BookCover />
            <BookTitle title='Hooked : How to Build Habid-Forming Products'/>
            <BookAuthor author='Nir Eyal' />
            <BookDescription description='How do successful companies create products people can’t put down?<br /><br />Why do some products capture widespread attention while others flop?<br /><br />Why do some products capture widespread attention while others flop?<br /><br />Why do some products capture widespread attention while others flop?' />
            <BookOptions />
        </Background>
    );
}

const Background = styled.div`
    margin: 0;
    padding: 0.5vw;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background: #FFF;
    box-shadow: inset 2.2px 2.2px 16px rgba(107, 103, 70, 0.5);
`;