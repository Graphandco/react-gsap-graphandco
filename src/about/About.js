import React, { useContext } from 'react';
import { TipContext } from '../tips/components/TipContext';
import { motion } from 'framer-motion';

const About = ({ variant, transition }) => {
    const [tips] = useContext(TipContext);
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
            <p>{tips.length}</p>
        </motion.div>
    );
};

export default About;
