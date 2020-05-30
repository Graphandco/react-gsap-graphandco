import React, { useContext } from 'react';
import { AboutContext } from './AboutContext';

import AboutCompetencesGroup from './AboutCompetencesGroup';

const AboutCompetences = () => {
    const [competences] = useContext(AboutContext);
    return (
        <>
            <h2>Compétences</h2>
            <section className='about-competences'>
                {competences.map((competence, index) => (
                    <AboutCompetencesGroup
                        key={index}
                        competence={competence}
                    />
                ))}
            </section>
        </>
    );
};

export default AboutCompetences;
