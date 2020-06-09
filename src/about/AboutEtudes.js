import React from 'react';

import SchoolIcon from '@material-ui/icons/School';
import EtudesImg from '../shared/images/etudes.jpg';

const Etudes = () => {
    return (
        <>
            <h2>
                <SchoolIcon className='title-icon' />
                Études et formations
            </h2>
            <section className='about__etudes'>
                <img src={EtudesImg} alt='Etudes' />
                <div className='about__etudes__content'>
                    <div className='about__etudes__content__date about__etudes__content__date1'>
                        <span>2001</span>
                    </div>
                    <div className='about__etudes__content__desc'>
                        <span>Baccalauréat Littéraire</span>
                    </div>
                    <div className='about__etudes__content__date about__etudes__content__date2'>
                        <span>2004</span>
                    </div>
                    <div className='about__etudes__content__desc'>
                        <span>
                            DEUG Lettres, Langue et Civilisation Étrangères
                            (Anglais)
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Etudes;
