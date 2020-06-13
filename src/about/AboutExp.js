import React, { useState } from 'react';
import Slider from 'react-slick';

import { motion, AnimatePresence } from 'framer-motion';

import Alsamanutention from '../shared/images/experience/alsamanutention.jpg';
import Creawebdesign from '../shared/images/experience/creawebdesign.png';
import Meosis from '../shared/images/experience/meosis.png';
import R2R from '../shared/images/experience/r2r.png';
import GraphAndCo from '../shared/images/logo.png';

import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

const AboutExp = () => {
    const settings = {
        //dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        // autoplay: true,
        // autoplaySpeed: 5000,
    };

    const collapseVariants = {
        opened: {
            scaleY: 1,
            transition: {
                //type: 'spring',
                stiffness: 150,
            },
        },
        closed: {
            scaleY: 0,
            transition: {
                //type: 'spring',
                stiffness: 150,
            },
        },
    };

    const [meosisOpen, setMeosisOpen] = useState(false);

    return (
        <>
            <h2>
                <BusinessCenterIcon className='title-icon' />
                Expérience Professionnelle
            </h2>

            <div className='exp'>
                <div
                    className={'exp-head ' + (meosisOpen ? 'open' : '')}
                    onClick={() => setMeosisOpen((state) => !state)}
                >
                    Meosis
                </div>
                <AnimatePresence>
                    {meosisOpen && (
                        <motion.div
                            className='exp-content'
                            variants={collapseVariants}
                            initial={'closed'}
                            animate={meosisOpen ? 'opened' : 'closed'}
                            exit={'closed'}
                        >
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Illo odit commodi delectus sed earum, adipisci
                            obcaecati excepturi expedita culpa blanditiis
                            aliquam provident odio impedit exercitationem
                            laudantium officiis. Amet ullam inventore magni quam
                            a, vero assumenda ut temporibus. Natus ipsa sint, et
                            harum similique debitis qui cumque! Odio commodi
                            consequuntur soluta. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Illum veniam quasi
                            accusamus maiores blanditiis. Harum mollitia rem
                            fuga soluta porro laudantium ratione, at commodi
                            illum itaque omnis qui nesciunt quaerat fugit rerum
                            nulla nobis minus similique impedit sed?
                            Perspiciatis officiis ex culpa dolorum explicabo
                            illo! Incidunt assumenda autem eos dolores.
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <section className='about__experience'>
                <Slider {...settings}>
                    <div className='about__experience__item'>
                        <div className='about__experience__item__logo'>
                            <img src={Meosis} alt='Meosis' />
                        </div>
                        <div className='about__experience__item__content'>
                            <div className='about__experience__item__title'>
                                2017 à aujourd'hui: <span>Meosis</span>
                            </div>
                            <div className='about__experience__item__desc'>
                                <p>
                                    Webmaster / Support : gestion du parc de
                                    sites vitrine (Wordpress) et e-commerce
                                    (Prestashop), résolution des bugs,
                                    optimisation UX/UI, prise en charge des
                                    demandes clients.
                                </p>
                                <p>
                                    Chef de Projet Graphisme et Développement :
                                    gestion de l’équipe de graphistes,
                                    développeurs et webmasters. Étude des
                                    nouveux cahiers des charges, gestion des
                                    plannings et des litiges clients, étude et
                                    devis sur les développements spécifiques,
                                    contrôle final des sites avant mise en
                                    ligne.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='about__experience__item'>
                        <div className='about__experience__item__logo'>
                            <img src={R2R} alt='Road2Race' />
                        </div>
                        <div className='about__experience__item__content'>
                            <div className='about__experience__item__title'>
                                2015 à 2019 <span>Road2Race</span>
                            </div>
                            <div className='about__experience__item__desc'>
                                <p>
                                    Associé et responsable du dévelopement du
                                    site e-commerce dans l’univers de la moto.
                                    Gestion via le CMS Magento, création de
                                    fiches produits et artworks, design
                                    graphique du site, optimisation SEO et
                                    campagnes Adwords.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='about__experience__item'>
                        <div className='about__experience__item__logo'>
                            <img src={GraphAndCo} alt='Graph And Co' />
                        </div>
                        <div className='about__experience__item__content'>
                            <div className='about__experience__item__title'>
                                2014 à 2015: <span>Graph & Co</span>
                            </div>
                            <div className='about__experience__item__desc'>
                                <p>
                                    Autoentrepreneur : création de sites web,
                                    supports visuels (logos, chartes
                                    graphiques), retouches photographiques et
                                    campagnes webmarketing.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='about__experience__item'>
                        <div className='about__experience__item__logo'>
                            <img src={Creawebdesign} alt='Creawebdesign' />
                        </div>
                        <div className='about__experience__item__content'>
                            <div className='about__experience__item__title'>
                                2009: <span>Creawebdesign</span>
                            </div>
                            <div className='about__experience__item__desc'>
                                <p>
                                    Technico-Commercial en Webmarketing. Vente
                                    de supports de communication, aide à la
                                    réalisation de sites web vitrines et
                                    marchands.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='about__experience__item'>
                        <div className='about__experience__item__logo'>
                            <img src={Alsamanutention} alt='Alsamanutention' />
                        </div>
                        <div className='about__experience__item__content'>
                            <div className='about__experience__item__title'>
                                2008 à 2009: <span>Alsamanutention</span>
                            </div>
                            <div className='about__experience__item__desc'>
                                <p>
                                    Responsable communication et informatique,
                                    mise en place de nouveaux outils de
                                    communication : refonte du site web,
                                    documentation interne et supports destinés
                                    aux techniciens.
                                </p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        </>
    );
};

export default AboutExp;
