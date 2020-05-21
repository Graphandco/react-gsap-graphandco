import React, { useState, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import TipCardStrapi from '../components/TipCardStrapi';
import Loader from '../../shared/components/Loader';

const TipsStrapi = () => {
    const [tips, setTips] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //GETTING ALL TIPS
    useEffect(() => {
        const handleTipListing = async () => {
            setIsLoading(true);
            try {
                const response = await Axios.get('http://localhost:1337/tips');
                console.log(response.data);
                setTips(response.data);
                setIsLoading(false);
            } catch (e) {
                console.log(
                    'Une erreur est survenue lors de la récupération des Tips'
                );
            }
        };
        handleTipListing();
    }, []);

    const config = {
        duration: 1500,
        //type: 'spring',
        ease: 'in-out',
        friction: 50,
        mass: 50,
    };

    const trail = useTrail(tips.length, {
        config,
        from: {
            //marginLeft: -30,
            opacity: 0,
            //transform: 'translate3d(0,-40px,0)',
        },
        to: {
            //marginLeft: 0,
            opacity: 1,
            //transform: 'translate3d(0,0px,0)'
        },
    });

    return (
        <section className='tips'>
            {isLoading ? (
                <Loader />
            ) : (
                <div className='tips-list'>
                    {trail.map((props, index) => {
                        return (
                            <animated.div
                                key={tips[index].id}
                                style={props}
                                className='card tips-card'
                            >
                                <Link to={`/tips/${tips[index].id}`}>
                                    <TipCardStrapi
                                        key={tips[index].id}
                                        tip={tips[index]}
                                    />
                                </Link>
                            </animated.div>
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default TipsStrapi;
