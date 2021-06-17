import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Person } from '@styled-icons/bootstrap/Person';
import { Add } from '@styled-icons/fluentui-system-filled/Add';
import { HomeAlt } from '@styled-icons/boxicons-regular/HomeAlt';

export const Navbar = () => {
    return(
        <NContainer>
            <HomeBtn />
            <AddBtn />
            <PersonBtn />
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
    top: 756.5px;
    left: 3.4px;
    border-radius: 0px 0px 16px 16px;
    box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.5);
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
    color: ${(props) => props.active === true ? '#000' : '#BFBEBF'}
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
    color: ${(props) => props.active === true ? '#000' : '#BFBEBF'}
    background-color: 2px 2px 16px #000;
`;

// Buttons ~

const HomeBtn = ({isHome}) => {
    return (
        <BtnContainer to={'/'}>
            <HomeIcon size={24} active={isHome} />
            <HomeLabel active={isHome}>Home</HomeLabel>
        </BtnContainer>
    );
}

const HomeIcon = styled(HomeAlt)`
    position: absolute;
    top: 10px;
`;

const HomeLabel = styled(BtnLabel)`
`;

const AddBtn = ({isAdd}) => {
    return (
        <BtnContainer to={'/create'}>
            <AddIcon size={24} active={isAdd} />
            <AddLabel active={isAdd}>Add</AddLabel>
        </BtnContainer>
    );
}

const AddIcon = styled(Add)`
    position: absolute;
    top: 10px;
`;

const AddLabel = styled(BtnLabel)``;

const PersonBtn = ({isPerson}) => {
    return (
        <BtnContainer to={'/detail'}>
            <PersonIcon size={24} />
            <PersonLabel>Person</PersonLabel>
        </BtnContainer>
    );
}

const PersonIcon = styled(Person)`
    position: absolute;
    top: 10px;
`;

const PersonLabel = styled(BtnLabel)``;