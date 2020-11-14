import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from '@material-ui/core/Slider';
import SchoolIcon from '@material-ui/icons/School';
import Years from './years/Years';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { useMediaQuery } from '@material-ui/core';

const AboutParcours = ({ variant, transition }) => {
    const isTabletOrMobile = useMediaQuery('(max-width: 768px)');

    const steps = [
        {
            value: 2008,
            label: '2008'
        },
        {
            value: 2010,
            label: 2010
        },
        {
            value: 2012,
            label: '2012'
        },
        {
            value: 2014,
            label: '2014'
        },
        {
            value: 2016,
            label: '2016'
        },
        {
            value: 2018,
            label: '2018'
        },
        {
            value: 2020,
            label: '2020'
        }
    ];

    const [value, setValue] = useState(2008);

    const roundValue = Math.floor(value);

    const handleSliderChange = (e, newValue) => {
        setValue(newValue);
    };

    const incrementValue = () => {
        roundValue < 2020 && setValue(value + 1);
    };
    const decrementValue = () => {
        roundValue > 2008 && setValue(value - 1);
    };

    const parcours = [
        {
            id: 0,
            year: 2008,
            title: 'Découverte de Photoshop',
            content:
                'Réalisation de visuels pour des forums, signatures, essais sur les retouches photos'
        },
        {
            id: 1,
            year: 2009,
            title: 'Premiers pas dans le Web',
            content:
                'Découverte des fonctionnements de base, réalisation de mon premier site en HTML'
        },
        {
            id: 2,
            year: 2010,
            title: 'Webmarketing',
            content:
                'Apprentissage des diverses prestations dans le web, vente de sites, visuels, campagnes évenementielles...'
        },
        {
            id: 3,
            year: 2011,
            title: 'HTML / CSS',
            content:
                'Optimisation des notions de structure web HTML et de la mise en forme avec les feuilles de style'
        },
        {
            id: 4,
            year: 2012,
            title: 'Photographie',
            content:
                'Collaboration lors de séances photos, aide pour le post-traitement des fichiers raw'
        },
        {
            id: 5,
            year: 2013,
            title: 'Wordpress',
            content:
                'Premier site sur Wordpress, familiarisation avec le CMS, le système de templates et les modification PHP au niveau du code'
        },
        {
            id: 6,
            year: 2014,
            title: 'Autoentrepreneur',
            content:
                'Premiers pas comme mon propre patron ! Démarchages et réalisations de quelques sites web'
        },
        {
            id: 7,
            year: 2015,
            title: 'E-commerce',
            content:
                'Découverte du système de vente en ligne, création de campagnes publicitaires, rédaction de fiches produits, présence physique lors des événements'
        },
        {
            id: 8,
            year: 2016,
            title: 'Associé',
            content:
                'Travail en équipe sur un site de vente en ligne destiné à la moto sur circuits, accessoires pilote et pièces moto'
        },
        {
            id: 9,
            year: 2017,
            title: 'Agence Web',
            content:
                "Intégration d'une équipe de graphistes, développeurs et référenceurs. Assimilation des demandes liées à la maintenance d'un parc de sites en tant que webmaster "
        },
        {
            id: 10,
            year: 2018,
            title: 'Chef de projet',
            content:
                "Management de l'équipe de graphistes, développeurs et webmasters, gestion des litiges clients et des différents coûts"
        },
        {
            id: 11,
            year: 2019,
            title: 'React',
            content:
                "Découverte de ce puissant outil qu'est la librairie React, permettant des sites rapides comme l'éclair grâce à la virtualisation du DOM et le chargement javascript côté navigateur"
        },
        {
            id: 12,
            year: 2020,
            title: 'Toujours plus...',
            content:
                "Création d'applications dynamiques en javascript, développements backend via NodJS, applications CRUD en full-stack"
        }
    ];

    const yearVariants = {
        hidden: {
            x: -300,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        },
        exit: {
            opacity: 0,
            x: 300
        }
    };

    const yearTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.4
    };

    return (
        <motion.div
            //style={pageStyle}
            initial='initial'
            animate='in'
            exit='out'
            variants={variant}
            transition={transition}
            className='parcours'
        >
            <h2>
                <SchoolIcon className='title-icon' />
                Mon parcours dans le web
            </h2>

            <section className='parcours-wrapper'>
                <div className='slider'>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby='input-slider'
                        marks={steps}
                        defaultValue={2008}
                        min={2008}
                        max={2020}
                        step={0.0001}
                        orientation={
                            isTabletOrMobile ? 'vertical' : 'horizontal'
                        }
                    />
                    <div className='year-item'>
                        <div className='input'>
                            <motion.div className='value'>
                                {roundValue}
                            </motion.div>
                            <div className='controls'>
                                <motion.div
                                    className='btn'
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.3 }
                                    }}
                                    onClick={decrementValue}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <IndeterminateCheckBoxIcon />
                                </motion.div>

                                <motion.div
                                    className='btn'
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.3 }
                                    }}
                                    onClick={incrementValue}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <AddBoxIcon />
                                </motion.div>
                            </div>
                        </div>
                        <div className='content'>
                            <AnimatePresence exitBeforeEnter>
                                {parcours.map(
                                    item =>
                                        item.year === roundValue && (
                                            <motion.div
                                                key={item.id}
                                                variants={yearVariants}
                                                initial='hidden'
                                                animate='visible'
                                                exit='exit'
                                                transition={yearTransition}
                                            >
                                                <Years
                                                    year={value}
                                                    title={
                                                        parcours[item.id].title
                                                    }
                                                    content={
                                                        parcours[item.id]
                                                            .content
                                                    }
                                                />
                                            </motion.div>
                                        )
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className='parcours'>
                <parcours__item>
                    <div className='parcours__item_image'></div>
                </parcours__item>
            </section> */}
        </motion.div>
    );
};

export default AboutParcours;
