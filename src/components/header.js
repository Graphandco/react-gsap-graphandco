import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink
                to='/'
                exact
                activeStyle={{
                    fontWeight: 'bold',
                    color: 'red',
                }}
            >
                Home
            </NavLink>
            <NavLink
                to='/about'
                exact
                activeStyle={{
                    fontWeight: 'bold',
                    color: 'red',
                }}
            >
                About
            </NavLink>
        </nav>
    );
};

export default Header;
