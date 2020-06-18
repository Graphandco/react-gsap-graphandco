import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-typewriting-effect';
import 'react-typewriting-effect/dist/index.css';

import HomeImage from '../shared/images/bg-home.jpg';

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

            <div className='home-content'>
                <img src={HomeImage} alt='Home Image' />
                <div className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Inventore atque et fuga qui, reprehenderit aliquid iste
                    dicta ratione nulla. Dolorum et debitis voluptatibus
                    sapiente ducimus? Incidunt nihil consectetur voluptatem
                    neque voluptatum nemo sed, quas libero perspiciatis velit
                    laudantium nam distinctio id earum cupiditate facere
                    expedita exercitationem, ipsum eligendi repellendus
                    praesentium.
                </div>
            </div>
        </motion.section>
    );
};

export default Home;
