import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Chevron from './accordion/Chevron';

const StyledButton = styled.button`
    padding: 0.3rem 1rem;
    padding: ${(props) => props.pad};
    cursor: pointer;
    margin-left: ${(props) => props.ml};
    margin-right: ${(props) => props.mr};
    background-color: var(--card-bg);
    border: 1px solid var(--main-text-color);
    border-radius: 3px;
    color: var(--main-text-color);
    transition: 0.3s;

    a {
        display: inline-flex;
        align-items: center;
    }

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
        text-transform: uppercase;
    }
    &:hover {
        background-color: var(--card-bg-hover);
        .prev {
            left: -5px;
        }
        .next {
            right: -5px;
        }
    }
`;

const CustomButton = (props) => {
    if (props.link) {
        return (
            <StyledButton className='custom-button' ml={props.ml} mr={props.mr}>
                <NavLink to={props.link}>
                    {props.prev && (
                        <Chevron
                            className='prev'
                            color='var(--main-text-color)'
                            height={props.chevronSize}
                            width={props.chevronSize}
                        />
                    )}
                    <span pad={props.padding}>{props.title}</span>
                    {props.next && (
                        <Chevron
                            className='next'
                            color='var(--main-text-color)'
                            height={props.chevronSize}
                            width={props.chevronSize}
                        />
                    )}
                </NavLink>
            </StyledButton>
        );
    } else {
        return (
            <StyledButton className='custom-button' ml={props.ml} mr={props.mr}>
                {props.prev && (
                    <Chevron
                        className='prev'
                        color='var(--main-text-color)'
                        height={props.chevronSize}
                        width={props.chevronSize}
                    />
                )}
                <span pad={props.padding}>{props.title}</span>
                {props.next && (
                    <Chevron
                        className='next'
                        color='var(--main-text-color)'
                        height={props.chevronSize}
                        width={props.chevronSize}
                    />
                )}
            </StyledButton>
        );
    }
};

export default CustomButton;
