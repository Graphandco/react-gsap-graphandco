import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Chevron from './accordion/Chevron';

const StyledButton = styled.button`
    padding: 0.5rem 2rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    margin-left: ${(props) => props.ml};
    margin-right: ${(props) => props.mr};
    background-color: transparent;
    border: 1px solid var(--main-text-color);
    border-radius: 3px;
    color: var(--main-text-color);
    transition: 0.3s;

    svg {
        position: relative;
        transition: 0.3s;
    }

    .prev {
        transform: rotate(180deg);
        left: 0;
    }

    .next {
        right: 0;
    }

    span {
        padding: 0 0.5rem;
    }
    &:hover {
        background-color: var(--card-bg);
        .prev {
            left: -5px;
        }
        .next {
            right: -5px;
        }
    }
`;

const CustomButton = (props) => {
    return (
        <NavLink to={props.link}>
            <StyledButton className='custom-button' ml={props.ml} mr={props.mr}>
                {props.prev && (
                    <Chevron
                        className='prev'
                        color='var(--main-text-color)'
                        height={props.chevronSize}
                        width={props.chevronSize}
                    />
                )}
                <span>{props.title}</span>
                {props.next && (
                    <Chevron
                        className='next'
                        color='var(--main-text-color)'
                        height={props.chevronSize}
                        width={props.chevronSize}
                    />
                )}
            </StyledButton>
        </NavLink>
    );
};

export default CustomButton;
