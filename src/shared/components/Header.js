import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
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
            <nav
                className={
                    (isTabletOrMobile ? 'responsive ' : '') +
                    (open ? 'open' : '')
                }
            >
                <NavLink to='/' exact activeStyle={{}} onClick={toggleOpenMenu}>
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
