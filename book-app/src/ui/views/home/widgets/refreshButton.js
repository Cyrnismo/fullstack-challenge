import React from 'react';
import styled from 'styled-components';
import { Refresh } from '@styled-icons/evaicons-solid/Refresh';

export const RefreshButton = ({ onClick }) => {
    return (
        <RButton onClick={onClick}>
            <SImg size={24} ></SImg>
        </RButton>
    );
}

const RButton = styled.div`
    padding: 6px;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: 124px;
    left: 320px;
    width: auto;
    height: auto;
    background: #ffd8dc;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 1.2px 1.2px 6px rgba(107, 103, 70, 0.1231);

    &:hover {
        background: #ffbdc3;
    }
`;

const SImg = styled(Refresh)`
    position: relative;
    color: #FFF;
`;