import React from 'react';

const AboutNavigation = ({ aboutActive, setAboutActive, aboutNavItem }) => {
    return (
        <>
            <nav className='about-nav'>
                {aboutNavItem.map((item) => (
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
                ))}
            </nav>
        </>
    );
};

export default AboutNavigation;
