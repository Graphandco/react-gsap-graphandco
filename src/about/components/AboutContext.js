import React, { createContext } from 'react';

export const AboutContext = createContext();

export const AboutProvider = (props) => {
    const competences = [
        {
            name: 'Langages',
            items: [
                {
                    name: 'HTML',
                    power: '95',
                },
                {
                    name: 'CSS',
                    power: '95',
                },
                {
                    name: 'Javascript',
                    power: '80',
                },
                {
                    name: 'PHP',
                    power: '70',
                },
            ],
        },
        {
            name: 'Graphisme',
            items: [
                {
                    name: 'Photoshop',
                    power: '90',
                },
                {
                    name: 'Illustrator',
                    power: '50',
                },
                {
                    name: 'Indesign',
                    power: '60',
                },
                {
                    name: 'Xd',
                    power: '70',
                },
            ],
        },
        {
            name: 'CMS / Frameworks',
            items: [
                {
                    name: 'Wordpress',
                    power: '90',
                },
                {
                    name: 'Prestashop',
                    power: '85',
                },
                {
                    name: 'Bootstrap',
                    power: '80',
                },
                {
                    name: 'React',
                    power: '80',
                },
            ],
        },
    ];

    return (
        <AboutContext.Provider value={[competences]}>
            {props.children}
        </AboutContext.Provider>
    );
};
