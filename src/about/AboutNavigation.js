import React from 'react';
import { NavLink } from 'react-router-dom';

const AboutNavigation = () => {
    const navLinks = [
        {
            name: 'A propos',
            path: '/about',
        },
        {
            name: 'Compétences',
            path: '/competences',
        },
        {
            name: 'Expérience',
            path: '/experience',
        },
        {
            name: 'Parcours',
            path: '/parcours',
        },
    ];

    return (
        <>
            <nav className='about-nav'>
                {/* {aboutNavItem.map((item) => (
                    <div
                        key={item.slug}
                        className={
                            aboutActive === item.slug
                                ? 'nav-item active '
                                : 'nav-item'
                        }
                        onClick={() => setAboutActive(item.slug)}
                    >
                        {item.name}
                    </div>
                ))} */}
                {navLinks.map((navLink) => (
                    <NavLink
                        to={navLink.path}
                        key={navLink.name}
                        exact
                        activeStyle={{}}
                        className='nav-item'
                    >
                        <span>{navLink.name}</span>
                    </NavLink>
                ))}
            </nav>
        </>
    );
};

export default AboutNavigation;
