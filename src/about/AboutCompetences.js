import React, { useContext, useEffect } from 'react';
import gsap from 'gsap';
import { AboutContext } from './AboutContext';

import AboutCompetencesGroup from './AboutCompetencesGroup';

import BuildIcon from '@material-ui/icons/Build';

const AboutCompetences = () => {
    const [competences] = useContext(AboutContext);

    useEffect(() => {
        let tl = gsap.timeline({
            delay: 0.3,
        });

        tl.from('h2', {
            opacity: 0,
            y: -100,
            ease: 'back.out(2)',
        });
        tl.from('.gsap', {
            opacity: 0,
            y: -100,
            ease: 'back.out(2)',
            stagger: 0.2,
        });
    }, []);

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
