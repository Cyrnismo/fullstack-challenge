import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Person } from '@styled-icons/bootstrap/Person';
import { Add } from '@styled-icons/fluentui-system-filled/Add';
import { HomeAlt } from '@styled-icons/boxicons-regular/HomeAlt';

export const Navbar = () => {
    let [isHome, setHome] = useState(false);
    let [isAdd, setAdd] = useState(false);
    let [isPerson, setPerson] = useState(false);

    function onClickHome() {
        setHome(true);
        setAdd(false);
        setPerson(false);
    }

    function onClickAdd() {
        setAdd(true);
        setHome(false);
        setPerson(false);
    }

    function onClickPerson() {
        setPerson(true);
        setHome(false);
        setAdd(false);
    }

    /* useEffect(() => {
        console.log(isHome, isAdd, isPerson);
    }, [isHome, isAdd, isPerson]) */

    return(
        <NContainer>
            <HomeBtn isHome={isHome} onClick={() => onClickHome()} />
            <AddBtn isAdd={isAdd} onClick={() => onClickAdd()} />
            <PersonBtn isPerson={isPerson} onClick={() => onClickPerson()} />
        </NContainer>    
    );
}

const NContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 375px;
    height: 59px;
    top: 755px;
    left: 2px;
    border-radius: 0px 0px 16px 16px;
    box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
    background: #FFFFFF;
`;

const BtnContainer = styled(Link)`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-left: 0.75rem;
    width: 100px;
    height: 40px;
    text-decoration: none;
`;

const BtnLabel = styled.h4`
    position: relative;
    top: 14px;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: #313131;
`;

// Buttons ~

const HomeBtn = (isHome) => {
    console.log(`Home: ${isHome}`);

    return (
        <BtnContainer to='/'>
            <HomeIcon size={24} isHome={isHome} />
            <HomeLabel isHome={isHome}>Home</HomeLabel>
        </BtnContainer>
    );
}

const HomeIcon = styled(HomeAlt)`
    position: absolute;
    top: 10px;
    color: ${(props) => props.isHome === 'true' ? '#000' : '#BFBEBF'};
`;

const HomeLabel = styled(BtnLabel)`
    color: ${(props) => props.isHome === 'true' ? '#000' : '#BFBEBF'};
    background-color: 2px 2px 16px #000;
`;

const AddBtn = ({isAdd}) => {
    console.log(`Add: ${isAdd}`);

    return (
        <BtnContainer to='/create'>
            <AddIcon size={24} isAdd={isAdd} />
            <AddLabel isAdd={isAdd}>Add</AddLabel>
        </BtnContainer>
    );
}

const AddIcon = styled(Add)`
    position: absolute;
    top: 10px;
    color: ${(props) => props.isAdd === 'true' ? '#000' : '#BFBEBF'};
`;

const AddLabel = styled(BtnLabel)`
    color: ${(props) => props.isAdd === 'true' ? '#000' : '#BFBEBF'};
`;

const PersonBtn = ({isPerson}) => {
    console.log(`Person: ${isPerson}`);

    return (
        <BtnContainer to='/detail'>
            <PersonIcon size={24} isPerson={isPerson} />
            <PersonLabel isPerson={isPerson}>Person</PersonLabel>
        </BtnContainer>
    );
}

const PersonIcon = styled(Person)`
    position: absolute;
    top: 10px;
    color: ${(props) => props.isPerson === 'true' ? '#000' : '#BFBEBF'};
`;

const PersonLabel = styled(BtnLabel)`
    color: ${(props) => props.isPerson === 'true' ? '#000' : '#BFBEBF'};
`;