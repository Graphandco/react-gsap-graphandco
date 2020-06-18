import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-typewriting-effect';
import 'react-typewriting-effect/dist/index.css';

import HomeImage from '../shared/images/bg-home.jpg';
import CustomButton from '../shared/components/CustomButton';

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
                    <Typewriter string='Un métier, une passion' />
                </h1>
                <CustomButton
                    link='/tips'
                    title='Voir mon travail'
                    chevronSize='12'
                />
            </section>
        </motion.div>
    );
};

export default Home;
