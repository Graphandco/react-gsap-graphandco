import React from 'react';
import { motion } from 'framer-motion';

const Home = ({ variant, transition }) => {
    return (
        <motion.div
            //style={pageStyle}
            initial='initial'
            animate='in'
            exit='out'
            variants={variant}
            transition={transition}
        >
            <h1>Home</h1>
        </motion.div>
    );
};

export default Home;
