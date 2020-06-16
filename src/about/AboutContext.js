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
                    color: '#e44d26',
                },
                {
                    name: 'CSS',
                    power: '95',
                    image: CSS,
                    color: '#264bde',
                },
                {
                    name: 'Javascript',
                    power: '80',
                    image: Javascript,
                    color: '#f0d91d',
                },
                {
                    name: 'PHP',
                    power: '70',
                    image: PHP,
                    color: '#848ebb',
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
                    color: '#25c3f8',
                },
                {
                    name: 'Illustrator',
                    power: '50',
                    image: Illustrator,
                    color: '#f87901',
                },
                {
                    name: 'Indesign',
                    power: '60',
                    image: Indesign,
                    color: '#e93b8b',
                },
                {
                    name: 'Xd',
                    power: '70',
                    image: Xd,
                    color: '#fb05e8',
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
                    color: '#216799',
                },
                {
                    name: 'Prestashop',
                    power: '85',
                    image: Prestashop,
                    color: '#fff',
                },
                {
                    name: 'Bootstrap',
                    power: '80',
                    image: Bootstrap,
                    color: '#6c41a3',
                },
                {
                    name: 'React',
                    power: '80',
                    image: ReactSVG,
                    color: '#49cff8',
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
