import React from 'react';
import { motion } from 'framer-motion';
//import { Typewriter } from 'react-typewriting-effect';
import 'react-typewriting-effect/dist/index.css';

import HomeImage from '../shared/images/illustration.png';
import CustomButton from '../shared/components/CustomButton';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const Home = ({ variant, transition }) => {
    const overlayVariants = {
        hidden: {
            scaleX: 0,
        },
        visible: {
            scaleX: 1,
            transition: {
                type: 'tween',
                delay: 0.5,
                duration: 0.3,
                ease: [0.17, 0.67, 0.83, 0.67],
            },
        },
    };
    const h1Variants = {
        hidden: {
            opacity: 0,
            y: -150,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                delay: 1,
                duration: 0.3,
                stiffness: 150,
            },
        },
    };
    const imgVariants = {
        hidden: {
            opacity: 0,
            x: 150,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 150,
                duration: 0.3,
                delay: 1.3,
            },
        },
    };
    const quoteVariants = {
        hidden: {
            x: -150,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                delay: 1.5,
                duration: 0.3,
                stiffness: 150,
            },
        },
    };
    const btnVariants = {
        hidden: {
            opacity: 0,
            y: 150,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                delay: 2,
                stiffness: 100,
            },
        },
    };
    return (
        <motion.div
            //style={pageStyle}
            initial='initial'
            animate='in'
            exit='out'
            variants={variant}
            transition={transition}
            className='home'
        >
            <section className='home__lead'>
                {/* Overlay */}
                <motion.div
                    className='home__lead__overlay'
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    variants={overlayVariants}
                    transition={transition}
                />
                {/* Title */}
                <motion.h1
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    variants={h1Variants}
                    transition={transition}
                >
                    {/* <Typewriter string='Graph & Co' /> */}
                    Graph & Co
                </motion.h1>
                <motion.div
                    className='home__lead__quote'
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    variants={quoteVariants}
                    transition={transition}
                >
                    <span>
                        <FormatQuoteIcon />
                        Un métier,<br></br> une passion
                        <FormatQuoteIcon />
                    </span>
                </motion.div>
                {/* Image */}
                <motion.div
                    className='home__lead__image'
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    variants={imgVariants}
                    transition={transition}
                >
                    <img className='me' src={HomeImage} alt='Illustration' />
                </motion.div>
                <motion.div
                    className='btn-wrapper'
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    variants={btnVariants}
                    transition={transition}
                >
                    <CustomButton
                        next
                        link='/contact'
                        title='Me contacter'
                        chevronSize='20'
                    />
                </motion.div>
            </section>
        </motion.div>
    );
};

export default Home;
