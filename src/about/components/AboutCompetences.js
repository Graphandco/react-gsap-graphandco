import React, { useContext } from 'react';
import { AboutContext } from './AboutContext';
import { motion } from 'framer-motion';

import AboutCompetencesGroup from './AboutCompetencesGroup';

import BuildIcon from '@material-ui/icons/Build';

const AboutCompetences = () => {
    const [competences] = useContext(AboutContext);
    return (
        <>
            <motion.h2
                initial={{ x: '-100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    type: 'spring',
                    duration: 0.5,
                    delay: 1.2,
                    stiffness: 80,
                }}
            >
                <BuildIcon className='title-icon' />
                Compétences
            </motion.h2>
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
