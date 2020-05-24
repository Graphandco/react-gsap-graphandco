import React from 'react';
import ContactForm from './ContactForm';
import './Contact.scss';
import HeaderImage from '../shared/images/bg-contact.jpg';

import SmartphoneIcon from '@material-ui/icons/Smartphone';
import RoomIcon from '@material-ui/icons/Room';

const Contact = () => {
    return (
        <>
            <div className='contact-header'>
                <img src={HeaderImage} alt='' />
            </div>
            <div id='contact-wrapper'>
                <div className='infos'>
                    <h2>Contact</h2>
                    <p>
                        <strong>Graph and Co</strong>
                    </p>
                    <p>
                        <RoomIcon />
                        1, rue de la Lucelle
                        <br />
                        68127 Sainte-Croix-en-Plaine
                    </p>
                    <SmartphoneIcon fontSize='small' /> 06 61 61 99 98
                </div>
                <ContactForm />
            </div>
        </>
    );
};

export default Contact;
