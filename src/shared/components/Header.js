import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Logo from '../images/logo.png';

const Header = () => {
    const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
    const [open, setIsOpen] = useState(false);
    const toggleOpenMenu = () => {
        setIsOpen(!open);
    };
    return (
        <>
            {isTabletOrMobile &&
                (open ? (
                    <CloseIcon
                        className='menu-toggle hamburger'
                        onClick={toggleOpenMenu}
                    />
                ) : (
                    <MenuIcon
                        className='menu-toggle close'
                        onClick={toggleOpenMenu}
                    />
                ))}
            <NavLink to='/' exact activeStyle={{}} id='logo'>
                <img src={Logo} alt='Logo' />
            </NavLink>
            <nav
                className={
                    (isTabletOrMobile ? 'responsive ' : '') +
                    (open ? 'open' : '')
                }
            >
                <NavLink to='/' exact activeStyle={{}}>
                    Home
                </NavLink>
                <NavLink
                    to='/about'
                    exact
                    activeStyle={{}}
                    onClick={toggleOpenMenu}
                >
                    A propos
                </NavLink>
                <NavLink
                    to='/tips'
                    exact
                    activeStyle={{}}
                    onClick={toggleOpenMenu}
                >
                    Tips
                </NavLink>
                <NavLink
                    to='/contact'
                    exact
                    activeStyle={{}}
                    onClick={toggleOpenMenu}
                >
                    Contact
                </NavLink>
            </nav>
        </>
    );
};

export default Header;
