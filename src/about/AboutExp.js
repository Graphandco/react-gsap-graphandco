import React, { useState } from 'react';
import Slider from 'react-slick';

import { Collapse } from 'react-collapse';
import Alsamanutention from '../shared/images/experience/alsamanutention.jpg';
import Creawebdesign from '../shared/images/experience/creawebdesign.png';
import Meosis from '../shared/images/experience/meosis.png';
import R2R from '../shared/images/experience/r2r.png';
import GraphAndCo from '../shared/images/logo.png';

import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import Accordion from '../shared/components/accordion/Accordion';

const AboutExp = () => {
    return (
        <>
            <h2>
                <BusinessCenterIcon className='title-icon' />
                Expérience Professionnelle
            </h2>

            <section className='about__experience'>
                <Accordion title='Meosis' image={Meosis}>
                    <>
                        <h3>
                            2017 à aujourd'hui: <span>Meosis</span>
                        </h3>
                        <p>
                            Webmaster / Support : gestion du parc de sites
                            vitrine (Wordpress) et e-commerce (Prestashop),
                            résolution des bugs, optimisation UX/UI, prise en
                            charge des demandes clients.
                        </p>
                        <p>
                            Chef de Projet Graphisme et Développement : gestion
                            de l’équipe de graphistes, développeurs et
                            webmasters. Étude des nouveux cahiers des charges,
                            gestion des plannings et des litiges clients, étude
                            et devis sur les développements spécifiques,
                            contrôle final des sites avant mise en ligne.
                        </p>
                    </>
                </Accordion>
                <Accordion title='Road 2 Race' image={R2R}>
                    <>
                        <h3>
                            2015 à 2019 <span>Road2Race</span>
                        </h3>
                        <p>
                            Associé et responsable du dévelopement du site
                            e-commerce dans l’univers de la moto. Gestion via le
                            CMS Magento, création de fiches produits et
                            artworks, design graphique du site, optimisation SEO
                            et campagnes Adwords.
                        </p>
                    </>
                </Accordion>
                <Accordion title='Graph & Co' image={GraphAndCo}>
                    <>
                        <h3>
                            2014 à 2015: <span>Graph & Co</span>
                        </h3>
                        <p>
                            Autoentrepreneur : création de sites web, supports
                            visuels (logos, chartes graphiques), retouches
                            photographiques et campagnes webmarketing.
                        </p>
                    </>
                </Accordion>
                <Accordion title='Creawebdesign' image={Creawebdesign}>
                    <>
                        <h3>
                            2009: <span>Creawebdesign</span>
                        </h3>
                        <p>
                            Technico-Commercial en Webmarketing. Vente de
                            supports de communication, aide à la réalisation de
                            sites web vitrines et marchands.
                        </p>
                    </>
                </Accordion>
                <Accordion title='Alsamanutention' image={Alsamanutention}>
                    <>
                        <h3>
                            2008 à 2009: <span>Alsamanutention</span>
                        </h3>
                        <p>
                            Responsable communication et informatique, mise en
                            place de nouveaux outils de communication : refonte
                            du site web, documentation interne et supports
                            destinés aux techniciens.
                        </p>
                    </>
                </Accordion>
            </section>
        </>
    );
};

export default AboutExp;
