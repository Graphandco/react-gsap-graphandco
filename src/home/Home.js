import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-typewriting-effect';
import 'react-typewriting-effect/dist/index.css';

import HomeImage from '../shared/images/illustration.png';
import CustomButton from '../shared/components/CustomButton';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const Home = ({ variant, transition }) => {
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
                <h1>
                    <Typewriter string='Graph & Co' />
                </h1>
                <div className='home__lead__quote'>
                    <span>
                        <FormatQuoteIcon />
                        Un métier,<br></br> une passion
                        <FormatQuoteIcon />
                    </span>
                </div>
                <div className='home__lead__image'>
                    <img className='me' src={HomeImage} alt='Illustration' />
                </div>
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
