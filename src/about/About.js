import React, { useState } from 'react';
import { motion } from 'framer-motion';

import AboutDesc from './AboutDesc';
import AboutCompetences from './AboutCompetences';
import AboutExp from './AboutExp';
import Parcours from './AboutParcours';
import AboutNavigation from './AboutNavigation';

const About = ({ variant, transition }) => {
    const [aboutActive, setAboutActive] = useState('apropos');

    return (
        <motion.div
            initial='initial'
            animate='in'
            exit='out'
            variants={variant}
            transition={transition}
            id='about'
            className='about'
        >
            {/* <nav className='about-nav'>
                <button>A Propos</button>
                <button>Compétences</button>
                <button>Expérience</button>
            </nav> */}
            <AboutNavigation
                aboutActive={aboutActive}
                setAboutActive={setAboutActive}
            />
            {aboutActive === 'apropos' && <AboutDesc />}
            {aboutActive === 'competences' && <AboutCompetences />}
            {aboutActive === 'exp' && <AboutExp />}
            {aboutActive === 'parcours' && <Parcours />}
        </motion.div>
    );
};

export default About;
