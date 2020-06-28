import React from 'react';
import { motion } from 'framer-motion';
import AboutImage from '../shared/images/about.jpg';

const AboutDesc = () => {
    return (
        <>
            <motion.h1
                className='overlay-title'
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: 'spring',
                    duration: 0.3,
                    delay: 0.5,
                    stiffness: 150,
                }}
                id='about'
            >
                A Propos
            </motion.h1>
            <section className='about__desc'>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: 'spring',
                        duration: 0.3,
                        delay: 0.8,
                        stiffness: 150,
                    }}
                    id='about'
                    className='about'
                >
                    <p>
                        Le monde du web m'a toujours passionné, selon moi c’est
                        un élément capital dans le monde d’aujourd’hui qui
                        évolue de façon exponentielle et est régi par les
                        nouvelles technologies.
                    </p>
                    <p>
                        J'ai découvert ce secteur d'activité il y a plus de
                        10ans maintenant, et j'en apprends tous les jours, c'est
                        ce qui me plaît et me motive le plus.
                    </p>
                    <p>
                        Qu'il s'agisse de développement, de nouvelles
                        applications ou de design, je suis toujours curieux et
                        cultive ma polyvalence pour pouvoir m'adapter facilement
                        à tous les types d'outils.
                    </p>
                </motion.div>
                <motion.img
                    src={AboutImage}
                    alt='A propos'
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: 'spring',
                        duration: 0.3,
                        delay: 1,
                        stiffness: 150,
                    }}
                />
            </section>
        </>
    );
};

export default AboutDesc;
