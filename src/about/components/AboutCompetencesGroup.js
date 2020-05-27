import React from 'react';
import AboutCompetencesItem from './AboutCompetencesItem';

const AboutCompetencesGroup = ({ name }) => {
    return (
        <>
            <h3>{name}</h3>
            <div className='competences-group'>
                <AboutCompetencesItem name='HTML' power='95' />
                <AboutCompetencesItem name='CSS' power='95' />
                <AboutCompetencesItem name='Javascript' power='80' />
                <AboutCompetencesItem name='PHP' power='70' />
            </div>
        </>
    );
};

export default AboutCompetencesGroup;
