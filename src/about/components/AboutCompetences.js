import React, { useContext } from 'react';
import { AboutContext } from './AboutContext';

import AboutCompetencesGroup from './AboutCompetencesGroup';

const AboutCompetences = () => {
    const [competences] = useContext(AboutContext);
    return (
        <section className='about-competences'>
            <h2>Compétences</h2>
            {competences.map((competence, index) => (
                <AboutCompetencesGroup key={index} competence={competence} />
            ))}
        </section>
    );
};

export default AboutCompetences;
