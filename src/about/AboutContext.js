import React, { createContext } from 'react';

import HTML from '../shared/images/competences/HTML.svg';
import CSS from '../shared/images/competences/CSS.svg';
import PHP from '../shared/images/competences/PHP.svg';
import Javascript from '../shared/images/competences/Javascript.svg';
import Photoshop from '../shared/images/competences/Photoshop.svg';
import Illustrator from '../shared/images/competences/Illustrator.svg';
import Indesign from '../shared/images/competences/Indesign.svg';
import Xd from '../shared/images/competences/Xd.svg';
import ReactSVG from '../shared/images/competences/ReactSVG.svg';
import Wordpress from '../shared/images/competences/Wordpress.svg';
import Prestashop from '../shared/images/competences/Prestashop.svg';
import Bootstrap from '../shared/images/competences/Bootstrap.svg';

export const AboutContext = createContext();

export const AboutProvider = (props) => {
    const competences = [
        {
            name: 'Langages',
            items: [
                {
                    name: 'HTML',
                    power: '95',
                    image: HTML,
                },
                {
                    name: 'CSS',
                    power: '95',
                    image: CSS,
                },
                {
                    name: 'Javascript',
                    power: '80',
                    image: Javascript,
                },
                {
                    name: 'PHP',
                    power: '70',
                    image: PHP,
                },
            ],
        },
        {
            name: 'Graphisme',
            items: [
                {
                    name: 'Photoshop',
                    power: '90',
                    image: Photoshop,
                },
                {
                    name: 'Illustrator',
                    power: '50',
                    image: Illustrator,
                },
                {
                    name: 'Indesign',
                    power: '60',
                    image: Indesign,
                },
                {
                    name: 'Xd',
                    power: '70',
                    image: Xd,
                },
            ],
        },
        {
            name: 'CMS / Frameworks',
            items: [
                {
                    name: 'Wordpress',
                    power: '90',
                    image: Wordpress,
                },
                {
                    name: 'Prestashop',
                    power: '85',
                    image: Prestashop,
                },
                {
                    name: 'Bootstrap',
                    power: '80',
                    image: Bootstrap,
                },
                {
                    name: 'React',
                    power: '80',
                    image: ReactSVG,
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
