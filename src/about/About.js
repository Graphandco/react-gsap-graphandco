import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import AboutDesc from './components/AboutDesc';
import AboutCompetences from './components/AboutCompetences';
import './About.scss';

const About = ({ variant, transition }) => {
    return (
        <motion.div
            initial='initial'
            animate='in'
            exit='out'
            variants={variant}
            transition={transition}
            id='about'
        >
            <h1>A Propos</h1>
            <AboutDesc />
            <AboutCompetences />
        </motion.div>
    );
};

export default About;
