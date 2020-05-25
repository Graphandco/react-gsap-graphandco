import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
    return (
        <>
            {isTabletOrMobile && <MenuIcon />}
            <nav className={isTabletOrMobile && 'responsive'}>
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
        </>
    );
};

export default Header;
