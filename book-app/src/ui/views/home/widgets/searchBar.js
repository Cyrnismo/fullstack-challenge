import React from 'react';
import styled from 'styled-components';
import { Search } from '@styled-icons/boxicons-regular/Search';

export const SearchBar = () => {
    return (
        <SBContainer>
            <SearchIcon size='24' />
            <Bar />
        </SBContainer>
    );
}

const SBContainer = styled.div`
    display: inline-block;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 336px;
    height: 48px;
    left: 19px;
    top: 50px;

    background: #FDFCFC;
    box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
    border-radius: 10px;
`;

const SearchIcon = styled(Search)`
    position: absolute;
    top: 14px;
    left: 10px;
    color: #F0F0F0;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
`;

const Bar = styled.input`
    padding-left: 50px;
    width: 100%;
    height: 100%;
    font-size: 18px;
    border: none;
    box-sizing: border-box;
    outline: #F0F0F0;

    input::active,
    input::focus {
        border: none;
    }

    background: #FDFCFC;
    border-radius: 10px;
`;
