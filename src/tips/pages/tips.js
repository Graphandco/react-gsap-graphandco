import React, { useState, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';
//import { Link } from 'react-router-dom';
import Axios from 'axios';

import TipCard from '../components/TipCard';

import './Tips.scss';

const Tips = () => {
    const [tips, setTips] = useState([]);

    //GETTING ALL TIPS
    useEffect(() => {
        const handleTipListing = async () => {
            //setIsLoading(true);
            try {
                const response = await Axios.get('/coding-tips?per_page=100');
                //console.log(response.data);
                setTips(response.data);
                //setIsLoading(false);
            } catch (e) {
                console.log(
                    'Une erreur est survenue lors de la récupération des Tips'
                );
            }
        };
        handleTipListing();
    }, []);

    const config = {
        //duration: 1500,
        type: 'spring',
        ease: 'in-out',
    };

    const trail = useTrail(tips.length, {
        config,
        from: {
            marginTop: -30,
            opacity: 0,
            //transform: 'translate3d(0,-40px,0)',
        },
        to: {
            marginTop: 0,
            opacity: 1,
            //transform: 'translate3d(0,0px,0)'
        },
    });

    return (
        <section className='tips'>
            <h1>Liste de tips</h1>
            <div className='tips-list'>
                {trail.map((props, index) => {
                    return (
                        <animated.div
                            key={tips[index].id}
                            style={props}
                            className='card tips-card'
                        >
                            <TipCard tip={tips[index]} />
                        </animated.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Tips;
