import React from 'react';
import { motion } from 'framer-motion';

import AboutDesc from './AboutDesc';
import AboutCompetences from './AboutCompetences';
import AboutExp from './AboutExp';
import Parcours from './AboutParcours';

const About = ({ variant, transition }) => {
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
            <AboutDesc />
            <AboutCompetences />
            <AboutExp />
            <Parcours />
        </motion.div>
    );
};

export default About;
