import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Person } from '@styled-icons/bootstrap/Person';
import { Add } from '@styled-icons/fluentui-system-filled/Add';
import { HomeAlt } from '@styled-icons/boxicons-regular/HomeAlt';

export const Navbar = () => {
    // ! Still can't update Navbar states and along with it, 
    // ! it's icon and labels colors...    
    const [isHome, setHome] = useState(false);
    const [isAdd, setAdd] = useState(false);
    const [isPerson, setPerson] = useState(false);

    const toggleHome = useCallback(() => {
        setHome(true);
        setAdd(false);
        setPerson(false);
    }, [])

    const toggleAdd = useCallback(() => {
        setAdd(true);
        setHome(false);
        setPerson(false);
    }, [])

    const togglePerson = useCallback(() => {
        setPerson(true);
        setHome(false);
        setAdd(false);
    }, [])
    
    /* 
    useEffect(() => {
        console.log(isHome, isAdd, isPerson);
    }, [isHome, isAdd, isPerson]) */

    return(
        <NContainer>
            <HomeBtn active={isHome} onClick={() => toggleHome()} />
            <AddBtn active={isAdd} onClick={() => toggleAdd()} />
            <PersonBtn active={isPerson} onClick={() => togglePerson()} />
        </NContainer>    
    );
}

const NContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 375.1px;
    height: 60px;
    top: 756px;
    left: 3.4px;
    border-radius: 4px 4px 16px 16px;
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
`;

const BtnLabel = styled.h4`
    position: relative;
    top: 14px;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: rgba(0, 0, 0, .627);
    background-color: 2px 2px 16px #000;

    &:hover {
        color: rgba(0, 0, 0, .9);
    }

    .active {
        color: #000;
    }
`;

// Buttons ~

const HomeBtn = ({active}) => {
    return (
        <BtnContainer to={'/'}>
            <HomeIcon className={active ? 'active' : ''} size={24} active={active} />
            <HomeLabel className={active ? 'active' : ''} active={active}>Home</HomeLabel>
        </BtnContainer>
    );
}

const HomeIcon = styled(HomeAlt)`
    position: absolute;
    top: 10px;
    color: rgba(0, 0, 0, .627);

    &:hover {
        color: rgba(0, 0, 0, .9);
    }

    .active {
        color: #000;
    }
`;

const HomeLabel = styled(BtnLabel)`
`;

const AddBtn = ({active}) => {
    return (
        <BtnContainer to={'/create'}>
            <AddIcon className={active ? 'active' : ''} size={24} active={active} />
            <AddLabel className={active ? 'active' : ''} active={active}>Add</AddLabel>
        </BtnContainer>
    );
}

const AddIcon = styled(Add)`
    position: absolute;
    top: 10px;
    color:rgba(0, 0, 0, .627);

    &:hover {
        color: rgba(0, 0, 0, .9);
    }

    .active {
        color: #000;
    }
`;

const AddLabel = styled(BtnLabel)`
`;

const PersonBtn = ({active}) => {
    return (
        <BtnContainer to={'/'}>
            <PersonIcon className={active ? 'active' : ''} size={24} active={active} />
            <PersonLabel className={active ? 'active' : ''} active={active}>Person</PersonLabel>
        </BtnContainer>
    );
}

const PersonIcon = styled(Person)`
    position: absolute;
    top: 10px;
    color:rgba(0, 0, 0, .627);

    &:hover {
        color: rgba(0, 0, 0, .9);
    }

    .active {
        color: #000;
    }
`;

const PersonLabel = styled(BtnLabel)`
`;