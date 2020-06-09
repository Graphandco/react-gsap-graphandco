import React from 'react';

const MentionsLegales = () => {
    return (
        <>
            <h1>Mentions Légales</h1>
            <div className='mention'>
                <h3>Ce site web est édité par :</h3>
                <p>Représentant légal : Mr Régis Daum</p>
                <p>Directeur de la publication : Mr Régis Daum</p>
            </div>
            <div className='mention'>
                <h3>Ce site web est développé par :</h3>
                <p>Graph and Co</p>
                <p>Mail : contact@graphandco.com</p>
                <p>Téléphone : 06 61 61 99 98</p>
            </div>
            <div className='mention'>
                <h3>Ce site web est hébergé par :</h3>
                <p>
                    1&1 , dont le siège social est : 14 Place de la Gare, 57200
                    Sarreguemines
                </p>
                <p>Téléphone : 03 39 70 80 89</p>
            </div>
        </>
    );
};

export default MentionsLegales;
