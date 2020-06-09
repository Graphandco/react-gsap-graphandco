import React from 'react';
import { motion } from 'framer-motion';

import AboutDesc from './AboutDesc';
import AboutCompetences from './AboutCompetences';
import AboutExp from './AboutExp';
import AboutEtudes from './AboutEtudes';

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
            <AboutDesc />
            <AboutCompetences />
            <AboutExp />
            <AboutEtudes />
        </motion.div>
    );
};

export default About;
