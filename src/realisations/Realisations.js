import React from 'react';
import { motion } from 'framer-motion';

import Portfolio from '../shared/images/realisations/portfolio.jpg';
import Willow from '../shared/images/realisations/willow-tarot.jpg';
import Toscana from '../shared/images/realisations/latoscana.jpg';
import BreakingBad from '../shared/images/realisations/breaking-bad.jpg';
import FunWithFlags from '../shared/images/realisations/fun-with-flags.jpg';
import Burgerio from '../shared/images/realisations/burgerio.jpg';
import Fylo from '../shared/images/realisations/fylo.jpg';

const Realisations = ({ variant, transition }) => {
    const realisations = [
        {
            name: 'Willow Tarot',
            image: Willow,
            link: 'https://willow-tarot.fr/',
            desc: 'Site Wordpress sur la taromancie et la psychologie',
        },
        {
            name: 'La Toscana',
            image: Toscana,
            link: 'https://www.latoscana.fr/',
            desc:
                "Réalisation sur Wordpress d'un site one-page pour une pizzeria",
        },
        {
            name: 'Breaking Bad',
            image: BreakingBad,
            link: 'https://breaking-bad.graphandco.com/',
            desc:
                "App codée avec React et l'API Breaking Bad pour chercher un personnage de la série ",
        },
        {
            name: 'Fun with flags',
            image: FunWithFlags,
            link: 'https://funwithflags.graphandco.com/',
            desc:
                "Utilisation d'une API avec React pour chercher un pays et en afficher les infos avec sa localisation",
        },
        {
            name: 'Burgerio',
            image: Burgerio,
            link: 'https://burgerio.graphandco.com/',
            desc:
                "Exemple de réalisation d'un site pour un restaurant spécialisé dans les burgers",
        },
        {
            name: 'Fylo',
            image: Fylo,
            link: 'https://fylo.graphandco.com/',
            desc:
                "Création d'une maquette pour un service de stockage en ligne",
        },
    ];

    return (
        <motion.div
            //style={pageStyle}
            initial='initial'
            animate='in'
            exit='out'
            variants={variant}
            transition={transition}
            className='realisations'
        >
            <h1>Réalisations</h1>
            <section className='realisations'>
                <div className='liste'>
                    <div className='description'>
                        <img src={Portfolio} alt='Portfolio' />
                        <div className='content'>
                            <h2>Portfolio</h2>
                            <p>
                                Retrouvez ici l'ensemble de mes réalisations,
                                aussi bien mes projets professionnels,
                                personnels ou simples maquettes et exercices
                                pratiques.
                            </p>
                        </div>
                    </div>
                    {realisations.map((realisation, index) => (
                        <div className='realisation' key={index}>
                            <div className='image'>
                                <img
                                    src={realisation.image}
                                    alt={realisation.name}
                                />
                            </div>
                            <div className='content'>
                                <div className='name'>{realisation.name}</div>
                                <div className='desc'>{realisation.desc}</div>
                                <div className='link'>
                                    <a
                                        href={realisation.link}
                                        target='blank'
                                        title={`Voir ${realisation.name}`}
                                    >
                                        Voir
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default Realisations;
