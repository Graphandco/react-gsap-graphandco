import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import AboutDesc from './AboutDesc';
import AboutCompetences from './AboutCompetences';
import AboutExp from './AboutExp';
import Parcours from './AboutParcours';
import AboutNavigation from './AboutNavigation';

const About = ({ variant, transition }) => {
    const [aboutActive, setAboutActive] = useState('apropos');

    const aboutVariants = {
        initial: {
            opacity: 0,
            x: '-100vw',
        },
        in: {
            opacity: 1,
            x: 0,
        },
        out: {
            opacity: 0,
            x: '100vw',
        },
    };

    const aboutTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.5,
    };

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
            <AboutNavigation
                aboutActive={aboutActive}
                setAboutActive={setAboutActive}
            />
            <AnimatePresence exitBeforeEnter>
                {aboutActive === 'apropos' && (
                    <motion.div
                        initial='initial'
                        animate='in'
                        exit='out'
                        variants={aboutVariants}
                        transition={aboutTransition}
                    >
                        <AboutDesc />
                    </motion.div>
                )}
                {aboutActive === 'competences' && (
                    <motion.div
                        initial='initial'
                        animate='in'
                        exit='out'
                        variants={aboutVariants}
                        transition={aboutTransition}
                    >
                        <AboutCompetences />
                    </motion.div>
                )}
                {aboutActive === 'exp' && (
                    <motion.div
                        initial='initial'
                        animate='in'
                        exit='out'
                        variants={aboutVariants}
                        transition={aboutTransition}
                    >
                        <AboutExp />
                    </motion.div>
                )}
                {aboutActive === 'parcours' && (
                    <motion.div
                        initial='initial'
                        animate='in'
                        exit='out'
                        variants={aboutVariants}
                        transition={aboutTransition}
                    >
                        <Parcours />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default About;
