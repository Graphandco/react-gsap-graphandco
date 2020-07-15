import React from 'react';
import AboutCompetencesItem from './AboutCompetencesItem';

const AboutCompetencesGroup = ({ competence }) => {
    return (
        <>
            <h3 className='gsap'>{competence.name}</h3>
            <div className='about__competences__group'>
                {competence.items.map((item, index) => (
                    <AboutCompetencesItem key={index} competences={item} />
                ))}
            </div>
        </>
    );
};

export default AboutCompetencesGroup;
