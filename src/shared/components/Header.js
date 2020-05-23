import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink to='/' exact activeStyle={{}}>
                Home
            </NavLink>
            <NavLink to='/about' exact activeStyle={{}}>
                A propos
            </NavLink>
            <NavLink to='/tips' exact activeStyle={{}}>
                Tips
            </NavLink>
            <NavLink to='/contact' exact activeStyle={{}}>
                Contact
            </NavLink>
        </nav>
    );
};

export default Header;
