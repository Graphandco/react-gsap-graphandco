import React from 'react';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';

import SmartphoneIcon from '@material-ui/icons/Smartphone';
import RoomIcon from '@material-ui/icons/Room';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Contact = ({ variant, transition }) => {
    return (
        <motion.div
            //style={pageStyle}
            initial='initial'
            animate='in'
            exit='out'
            variants={variant}
            transition={transition}
        >
            <div id='contact-wrapper'>
                <motion.div
                    className='infos'
                    initial={{ x: '-100vw', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: 'spring',
                        duration: 0.5,
                        delay: 0.5,
                        stiffness: 100,
                    }}
                >
                    <h1 className='contact'>Contact</h1>
                    {/* <p className='name'>
                        <strong>Graph and Co</strong>
                    </p> */}
                    <p className='address'>
                        <RoomIcon />
                        <span>
                            1, rue de la Lucelle
                            <br />
                            68127 Sainte-Croix-en-Plaine
                        </span>
                    </p>
                    <p className='phone'>
                        <SmartphoneIcon fontSize='small' /> 06 61 61 99 98
                    </p>
                    <p className='links'>
                        <motion.a
                            href='mailto:contact@graphandco.com'
                            title='Contactez-moi par mail'
                            whileHover={{ scale: 1.3, originX: 0 }}
                            transition={{ type: 'spring', stifness: 250 }}
                        >
                            <MailIcon />
                        </motion.a>
                        <motion.a
                            href='https://www.linkedin.com/in/regisdaum/'
                            target='blank'
                            title='Retrouvez-moi sur LinkedIn'
                            whileHover={{ scale: 1.3, originX: 0 }}
                            transition={{ type: 'spring', stifness: 250 }}
                        >
                            <LinkedInIcon />
                        </motion.a>
                        <motion.a
                            href='https://github.com/Graphandco?tab=repositories/'
                            target='blank'
                            title='Retrouvez-moi sur GitHub'
                            whileHover={{ scale: 1.3, originX: 0 }}
                            transition={{ type: 'spring', stifness: 250 }}
                        >
                            <GitHubIcon />
                        </motion.a>
                    </p>
                </motion.div>
                <motion.div
                    initial={{ x: '100vw', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: 'spring',
                        duration: 0.5,
                        delay: 1,
                        stiffness: 100,
                    }}
                    className='form'
                >
                    <ContactForm />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Contact;
