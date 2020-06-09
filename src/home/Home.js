import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-typewriting-effect';
import 'react-typewriting-effect/dist/index.css';

const Home = ({ variant, transition }) => {
    return (
        <motion.section
            //style={pageStyle}
            initial='initial'
            animate='in'
            exit='out'
            variants={variant}
            transition={transition}
            className='home'
        >
            <h1>
                <Typewriter string='Un métier, une passion' />
            </h1>
        </motion.section>
    );
};

export default Home;
