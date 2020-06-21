import React from 'react';
import { motion } from 'framer-motion';
import AboutImage from '../shared/images/about.jpg';

const AboutDesc = () => {
    // const variantsH1 = {
    //     initial: {
    //         opacity: 0,
    //         y: '-100vh',
    //     },
    //     in: {
    //         opacity: 1,
    //         y: 0,
    //     },
    //     out: {
    //         opacity: 0,
    //         y: '100vh',
    //     },
    // };

    // const variantsP = {
    //     initial: {
    //         opacity: 0,
    //         x: '-100vw',
    //     },
    //     in: {
    //         opacity: 1,
    //         x: 0,
    //     },
    //     out: {
    //         opacity: 0,
    //         x: '100vw',
    //     },
    // };

    // const variantsImg = {
    //     initial: {
    //         opacity: 0,
    //         x: '100vw',
    //     },
    //     in: {
    //         opacity: 1,
    //         x: 0,
    //     },
    //     out: {
    //         opacity: 0,
    //         x: '-100vw',
    //     },
    // };

    return (
        <>
            <motion.h1
                className='overlay-title'
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: 'spring',
                    duration: 0.3,
                    delay: 0.5,
                    stiffness: 150,
                }}
                id='about'
            >
                A Propos
            </motion.h1>
            <section className='about__desc'>
                <motion.p
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: 'spring',
                        duration: 0.3,
                        delay: 0.8,
                        stiffness: 150,
                    }}
                    id='about'
                    className='about'
                >
                    L’informatique, incluant le développement aussi bien que la
                    découverte de nouveaux logiciels ou procédures, occupe une
                    place importante dans ma vie quotidienne et je pense que
                    c’est un élément capital dans le monde d’aujourd’hui qui
                    évolue de façon exponentielle et est régi par les nouvelles
                    technologies. Le métier de développeur évolue
                    continuellement, en relation avec les nouvelles technologies
                    et les nouveaux outils.
                </motion.p>
                <motion.img
                    src={AboutImage}
                    alt='A propos'
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: 'spring',
                        duration: 0.3,
                        delay: 1,
                        stiffness: 150,
                    }}
                />
            </section>
        </>
    );
};

export default AboutDesc;
