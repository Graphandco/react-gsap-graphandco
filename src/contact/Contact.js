import React from 'react';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';
import './Contact.scss';
import HeaderImage from '../shared/images/bg-contact.jpg';

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
            <div className='contact-header'>
                <img src={HeaderImage} alt='' />
            </div>
            <div id='contact-wrapper'>
                <div className='infos'>
                    <h1 className='contact'>Contact</h1>
                    <p>
                        <strong>Graph and Co</strong>
                    </p>
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
                        <a
                            href='mailto:contact@graphandco.com'
                            title='Contactez-moi par mail'
                        >
                            <MailIcon />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/regisdaum/'
                            target='blank'
                            title='Retrouvez-moi sur LinkedIn'
                        >
                            <LinkedInIcon />
                        </a>
                        <a
                            href='https://github.com/Graphandco?tab=repositories/'
                            target='blank'
                            title='Retrouvez-moi sur GitHub'
                        >
                            <GitHubIcon />
                        </a>
                    </p>
                </div>
                <ContactForm />
            </div>
        </motion.div>
    );
};

export default Contact;
