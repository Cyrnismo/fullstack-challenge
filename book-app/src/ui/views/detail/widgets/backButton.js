import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LeftArrowAlt } from '@styled-icons/boxicons-regular';

export const BackButton = () => {
    return (
        <LAContainer to='/'>
            <LeftArrow size={24} color={'#000'} />
        </LAContainer>
    );
}

const LAContainer = styled(Link)``;

const LeftArrow = styled(LeftArrowAlt)`
    position: absolute;
    left: 32px;
    top: 55px;
`;