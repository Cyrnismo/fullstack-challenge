import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TextInput } from './widgets/textInput';
import { AddBookBtn } from './widgets/addBookBtn';
import { Navbar } from '../../commom_widgets/navbar';
import { TextAreaInput } from './widgets/textAreaInput';



export default function Create() {
    const [name, onChangeName] = useState('');
    const [author, onChangeAuthor] = useState('');
    const [description, onChangeDesc] = useState('');
    // const [modalVisible, setModalVisible] = useState(false);

    return (
        <Background>
            <Title>Add new book</Title>
            <TextInput label='Name' top='139px' value={name} onChange={e => onChangeName(e.target.value)} />
            <TextInput label='Author' top='253px' value={author} onChange={e => onChangeAuthor(e.target.value)} />
            <TextAreaInput label='Description' top='368px' value={description} onChange={e => onChangeDesc(e.target.value)} />
            <AddBookBtn />
            <Navbar name={name} author={author} description={description} />
        </Background>
    );
}

const Background = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0.5vw;
    width: 100%;
    height: 100%;
`;

const Title = styled.h1`
    position: absolute;
    width: 169px;
    height: 29px;
    top: 40px;

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #FF6978;
`;