import React from 'react';
import AboutImage from '../../shared/images/about.jpg';

const AboutDesc = () => {
    return (
        <section className='about-desc'>
            <p>
                L’informatique, incluant le développement aussi bien que la
                découverte de nouveaux logiciels ou procédures, occupe une place
                importante dans ma vie quotidienne et je pense que c’est un
                élément capital dans le monde d’aujourd’hui qui évolue de façon
                exponentielle et est régi par les nouvelles technologies. Le
                métier de développeur évolue continuellement, en relation avec
                les nouvelles technologies et les nouveaux outils.
            </p>
            <img src={AboutImage} alt='A propos' />
        </section>
    );
};

export default AboutDesc;
