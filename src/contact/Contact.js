import React from 'react';
import ContactForm from './ContactForm';
import './Contact.scss';
import HeaderImage from '../shared/images/bg-contact.jpg';

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
                        1, rue de la Lucelle
                        <br />
                        68127 Sainte-Croix-en-Plaine
                    </p>
                    <p>06 61 61 99 98</p>
                </div>
                <ContactForm />
            </div>
        </>
    );
};

export default Contact;
