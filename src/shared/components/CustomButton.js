import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Chevron from './accordion/Chevron';

const StyledButton = styled.button`
    padding: 8px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: ${(props) => props.ml};
    margin-right: ${(props) => props.mr};
    background-color: transparent;
    border: 1px solid var(--main-text-color);
    color: var(--main-text-color);
`;

const CustomButton = (props) => {
    return (
        <NavLink to={props.link}>
            <StyledButton className='custom-button' ml={props.ml} mr={props.mr}>
                {props.prev && <Chevron height={15} width={15} />}
                <span>{props.title}</span>
                {props.next && <Chevron height={15} width={15} />}
            </StyledButton>
        </NavLink>
    );
};

export default CustomButton;
