import React from 'react';
import { motion } from 'framer-motion';
//import { Typewriter } from 'react-typewriting-effect';
import 'react-typewriting-effect/dist/index.css';

import HomeImage from '../shared/images/illustration.png';
import CustomButton from '../shared/components/CustomButton';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const Home = ({ variant, transition }) => {
    const h1Variants = {
        hidden: {
            opacity: 0,
            y: '-100px',
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                delay: 0.8,
                stiffness: 150,
            },
        },
    };
    const imgVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1,
                delay: 1.2,
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
                <div className='home__lead__quote'>
                    <span>
                        <FormatQuoteIcon />
                        Un métier,<br></br> une passion
                        <FormatQuoteIcon />
                    </span>
                </div>
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

                <CustomButton
                    next
                    link='/tips'
                    title='Voir mon travail'
                    chevronSize='20'
                />
            </section>
        </motion.div>
    );
};

export default Home;
