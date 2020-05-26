import React from 'react';
import { motion } from 'framer-motion';

import './Home.scss';

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
            <h1>Home</h1>
        </motion.section>
    );
};

export default Home;
