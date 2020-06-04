import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import HomeIcon from '@material-ui/icons/Home';
import Logo from '../images/logo.png';
import { motion } from 'framer-motion';

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
                <NavLink to='/' exact activeStyle={{}} onClick={toggleOpenMenu}>
                    {isTabletOrMobile ? (
                        'Accueil'
                    ) : (
                        <motion.div
                            whileHover={{ scale: 1.3, originX: 0 }}
                            transition={{ type: 'spring', stifness: 250 }}
                        >
                            <HomeIcon fontSize={'small'} />
                        </motion.div>
                    )}
                </NavLink>
                <NavLink
                    to='/about'
                    exact
                    activeStyle={{}}
                    onClick={toggleOpenMenu}
                >
                    <motion.span
                        whileHover={{ scale: 1.3, originX: 0 }}
                        transition={{ type: 'spring', stifness: 250 }}
                    >
                        A propos
                    </motion.span>
                </NavLink>
                <NavLink
                    to='/tips'
                    exact
                    activeStyle={{}}
                    onClick={toggleOpenMenu}
                >
                    <motion.span
                        whileHover={{ scale: 1.3, originX: 0 }}
                        transition={{ type: 'spring', stifness: 250 }}
                    >
                        Tips
                    </motion.span>
                </NavLink>
                <NavLink
                    to='/contact'
                    exact
                    activeStyle={{}}
                    onClick={toggleOpenMenu}
                >
                    <motion.span
                        whileHover={{ scale: 1.3, originX: 0 }}
                        transition={{ type: 'spring', stifness: 250 }}
                    >
                        Contact
                    </motion.span>
                </NavLink>
            </nav>
        </>
    );
};

export default Header;
