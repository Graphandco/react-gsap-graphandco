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
            {/* <nav className='about-nav'>
                <button>A Propos</button>
                <button>Compétences</button>
                <button>Expérience</button>
            </nav> */}
            <AboutNavigation
                aboutActive={aboutActive}
                setAboutActive={setAboutActive}
            />
            <AnimatePresence exitBeforeEnter>
                {aboutActive === 'apropos' && (
                    <AboutDesc
                        variant={aboutVariants}
                        transition={aboutTransition}
                    />
                )}
                {aboutActive === 'competences' && (
                    <AboutCompetences
                        variant={aboutVariants}
                        transition={aboutTransition}
                    />
                )}
                {aboutActive === 'exp' && (
                    <AboutExp
                        variant={aboutVariants}
                        transition={aboutTransition}
                    />
                )}
                {aboutActive === 'parcours' && (
                    <Parcours
                        variant={aboutVariants}
                        transition={aboutTransition}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default About;
