import React from 'react';
import { motion } from 'framer-motion';

const About = ({ variant, transition }) => {
    return (
        <motion.div
            //style={pageStyle}
            initial='initial'
            animate='in'
            exit='out'
            variants={variant}
            transition={transition}
        >
            <h1>A Propos</h1>
        </motion.div>
    );
};

export default About;
