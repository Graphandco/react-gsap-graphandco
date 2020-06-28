import React from 'react';

const AboutNavigation = ({ aboutActive, setAboutActive }) => {
    const changeApropos = () => {
        setAboutActive('apropos');
    };
    const changeCompetences = () => {
        setAboutActive('competences');
    };
    const changeExp = () => {
        setAboutActive('exp');
    };
    const changeParcours = () => {
        setAboutActive('parcours');
    };
    return (
        <>
            <nav className='about-nav'>
                <div
                    className={
                        aboutActive === 'apropos'
                            ? 'nav-item active '
                            : 'nav-item'
                    }
                    onClick={changeApropos}
                >
                    A Propos
                </div>
                <div
                    className={
                        aboutActive === 'competences'
                            ? 'nav-item active '
                            : 'nav-item'
                    }
                    onClick={changeCompetences}
                >
                    Compétences
                </div>
                <div
                    className={
                        aboutActive === 'exp' ? 'nav-item active ' : 'nav-item'
                    }
                    onClick={changeExp}
                >
                    Expérience
                </div>
                <div
                    className={
                        aboutActive === 'parcours'
                            ? 'nav-item active '
                            : 'nav-item'
                    }
                    onClick={changeParcours}
                >
                    Parcours
                </div>
            </nav>
        </>
    );
};

export default AboutNavigation;
