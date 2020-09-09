import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import AboutDesc from './AboutDesc';
import AboutCompetences from './AboutCompetences';
import AboutExp from './AboutExp';
import AboutParcours from './AboutParcours';

const About = ({ variant, transition }) => {
    const [aboutActive] = useState('apropos');

    // const aboutNavItem = [
    //     {
    //         name: 'A propos',
    //         slug: 'apropos'
    //     },
    //     {
    //         name: 'Compétences',
    //         slug: 'competences'
    //     },
    //     {
    //         name: 'Expérience',
    //         slug: 'exp'
    //     },
    //     {
    //         name: 'Parcours',
    //         slug: 'parcours'
    //     }
    // ];

    const aboutVariants = {
        initial: {
            x: -300,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        },
        exit: {
            opacity: 0,
            x: 300
        }
    };

    const aboutTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.4
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
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    initial='initial'
                    animate='visible'
                    exit='exit'
                    variants={aboutVariants}
                    transition={aboutTransition}
                >
                    {aboutActive === 'apropos' && <AboutDesc />}
                    {aboutActive === 'competences' && <AboutCompetences />}
                    {aboutActive === 'exp' && <AboutExp />}
                    {aboutActive === 'parcours' && <AboutParcours />}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

export default About;
