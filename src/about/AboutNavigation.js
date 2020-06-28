import React from 'react';

const AboutNavigation = ({ setAboutActive }) => {
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
                <div className='nav-item' onClick={changeApropos}>
                    A Propos
                </div>
                <div className='nav-item' onClick={changeCompetences}>
                    Compétences
                </div>
                <div className='nav-item' onClick={changeExp}>
                    Expérience
                </div>
                <div className='nav-item' onClick={changeParcours}>
                    Parcours
                </div>
            </nav>
        </>
    );
};

export default AboutNavigation;
