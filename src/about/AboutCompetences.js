import React, { useContext } from 'react';
import { AboutContext } from './AboutContext';

import AboutCompetencesGroup from './AboutCompetencesGroup';

import BuildIcon from '@material-ui/icons/Build';

const AboutCompetences = () => {
    const [competences] = useContext(AboutContext);
    return (
        <>
            <h2>
                <BuildIcon className='title-icon' />
                Compétences
            </h2>
            <section className='about__competences'>
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
