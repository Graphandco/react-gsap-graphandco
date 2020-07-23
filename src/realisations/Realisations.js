import React from 'react';
import { motion } from 'framer-motion';

import { IoIosAlbums } from 'react-icons/io';
import Willow from '../shared/images/realisations/willow-tarot.jpg';
import Toscana from '../shared/images/realisations/latoscana.jpg';

const Realisations = ({ variant, transition }) => {
    const realisations = [
        {
            name: 'Willow Tarot',
            image: Willow,
            link: 'https://willow-tarot.fr/',
            desc:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolor, temporibus porro eius magni quaerat laborum, pariatur praesentium, corporis laboriosam optio. Reiciendis, nam perspiciatis sed deleniti eaque magni sequi explicabo.',
        },
        {
            name: 'La Toscana',
            image: Toscana,
            link: 'https://www.latoscana.fr/',
            desc:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolor, temporibus porro eius magni quaerat laborum, pariatur praesentium, corporis laboriosam optio. Reiciendis, nam perspiciatis sed deleniti eaque magni sequi explicabo.',
        },
        {
            name: 'La Toscana',
            image: Toscana,
            link: 'https://www.latoscana.fr/',
            desc:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolor, temporibus porro eius magni quaerat laborum, pariatur praesentium, corporis laboriosam optio. Reiciendis, nam perspiciatis sed deleniti eaque magni sequi explicabo.',
        },
        {
            name: 'La Toscana',
            image: Toscana,
            link: 'https://www.latoscana.fr/',
            desc:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolor, temporibus porro eius magni quaerat laborum, pariatur praesentium, corporis laboriosam optio. Reiciendis, nam perspiciatis sed deleniti eaque magni sequi explicabo.',
        },
        {
            name: 'La Toscana',
            image: Toscana,
            link: 'https://www.latoscana.fr/',
            desc:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolor, temporibus porro eius magni quaerat laborum, pariatur praesentium, corporis laboriosam optio. Reiciendis, nam perspiciatis sed deleniti eaque magni sequi explicabo.',
        },
        {
            name: 'La Toscana',
            image: Toscana,
            link: 'https://www.latoscana.fr/',
            desc:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolor, temporibus porro eius magni quaerat laborum, pariatur praesentium, corporis laboriosam optio. Reiciendis, nam perspiciatis sed deleniti eaque magni sequi explicabo.',
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
                        <IoIosAlbums />
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Est ab eaque natus, ullam earum maxime ratione
                            veritatis nostrum blanditiis minima quis dolor,
                            nihil error numquam iusto nemo? Eveniet non nemo
                            inventore libero cumque blanditiis rerum, atque
                            totam? Aperiam, ipsum consequatur? Ducimus
                            asperiores nihil aut tempora vitae maiores ipsum
                            voluptas architecto.
                        </p>
                    </div>
                    {realisations.map((realisation, index) => (
                        <div className='realisation' key={index}>
                            <div className='name'>{realisation.name}</div>
                            <div className='image'>
                                <img
                                    src={realisation.image}
                                    alt={realisation.name}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default Realisations;
