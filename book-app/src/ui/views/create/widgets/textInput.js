import React from 'react';
import styled from 'styled-components';

export const TextInput = ({label, top, name, onChange}) => {
    return (
        <TIContainer top={top}>
            <SLabel>{label}</SLabel>
            <SInput name={name} onChange={onChange} />
        </TIContainer>
    );
}

const TIContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    position: absolute;
    width: 336px;
    height: 76px;
    left: 20px;
    top: ${(props) => props.top};
`;

const SLabel = styled.span`
    position: relative;
    margin-right: auto;
    margin-left: 0px;
    width: 46px;
    height: 18px;
    font-family: SF Pro Text;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
    color: #000000;
`;

const SInput = styled.input`
    margin-top: 0.25rem;
    padding: 0 1rem;
    width: 100%;
    height: 100%;
    font-size: 18px;
    border: none;
    box-sizing: border-box;
    outline: #F0F0F0;
    background: #FDFCFC;
    border-radius: 10px;
    box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);

    input::active,
    input::focus {
        border: none;
    }
`;