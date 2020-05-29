import React from 'react';

import CookieConsent from 'react-cookie-consent';
import Cookie from '../images/cookie.svg';

const CookiesBanner = () => {
    return (
        <CookieConsent
            location='bottom'
            buttonText={`J'ai compris`}
            cookieName='GraphandCoCookies'
            disableStyles={true}
            expires={150}
        >
            <div className='cookie-content'>
                <img
                    src={Cookie}
                    alt='Cookie'
                    width='50px'
                    style={{ marginRight: '1rem' }}
                />
                Ce site utilise des cookies afin d'améliorer l'expérience
                utilisateur. En cliquant sur "J'ai compris" vous acceptez
                l'utilisation de ces derniers.{' '}
            </div>
        </CookieConsent>
    );
};

export default CookiesBanner;
