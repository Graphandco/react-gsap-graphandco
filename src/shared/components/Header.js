import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Logo from '../images/logo.png';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';

import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const Header = () => {
    const [lightTheme, setLightTheme] = useContext(ThemeContext);
    const handleTheme = () => {
        setLightTheme(!lightTheme);
        document.body.classList.toggle('light');
    };

    const isTabletOrMobile = useMediaQuery('(max-width: 768px)');
    const [open, setIsOpen] = useState(false);
    const toggleOpenMenu = () => {
        setIsOpen(!open);
    };

    const menuVariants = {
        opened: {
            left: 0,
            transition: {
                type: 'tween',
                staggerChildren: 0.15,
                //delayChildren: 0.2,
            },
        },
        closed: {
            left: '-100%',
            transition: {
                type: 'tween',
                staggerChildren: 0.05,
                delay: 0.2,
            },
        },
    };

    let navLinkVariants;
    if (isTabletOrMobile) {
        navLinkVariants = {
            opened: {
                opacity: 1,
                x: 0,
                transition: {
                    type: 'spring',
                    stiffness: 80,
                },
            },
            closed: {
                opacity: 0,
                x: -500,
                transition: {
                    type: 'spring',
                    stiffness: 80,
                },
            },
        };
    } else {
        navLinkVariants = {};
    }

    const navLinks = [
        {
            name: 'accueil',
            path: '/',
        },
        {
            name: 'a propos',
            path: '/about',
        },
        // {
        //     name: 'réalisations',
        //     path: '/realisations',
        // },
        {
            name: 'tips',
            path: '/tips',
        },
        {
            name: 'contact',
            path: '/contact',
        },
    ];

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
            <motion.nav
                variants={menuVariants}
                initial={'closed'}
                animate={open ? 'opened' : 'closed'}
                className={
                    (isTabletOrMobile ? 'responsive ' : '') +
                    (open ? 'open' : '')
                }
                onClick={toggleOpenMenu}
            >
                {navLinks.map((navLink) => (
                    <NavLink
                        to={navLink.path}
                        key={navLink.name}
                        exact
                        activeStyle={{}}
                    >
                        {isTabletOrMobile ? (
                            <motion.span variants={navLinkVariants}>
                                {navLink.name}
                            </motion.span>
                        ) : (
                            <span>{navLink.name}</span>
                        )}
                    </NavLink>
                ))}
            </motion.nav>
            {lightTheme ? (
                <NightsStayIcon onClick={handleTheme} className={'moon'} />
            ) : (
                <WbSunnyIcon onClick={handleTheme} className={'sun'} />
            )}
        </>
    );
};

export default Header;
