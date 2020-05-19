import React, { useState, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';
//import { Link } from 'react-router-dom';
import Axios from 'axios';
import TipsList from '../components/tips/TipsList';

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

    const trail = useTrail(tips.length, {
        from: {
            marginTop: -20,
            opacity: 0,
            //transform: 'translate3d(0,-40px,0)',
        },
        to: {
            marginTop: 0,
            opacity: 1,
            //transform: 'translate3d(0,0px,0)'
        },
        delay: 0,
        mass: 10,
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
                            dangerouslySetInnerHTML={{
                                __html: tips[index].title.rendered,
                            }}
                            className='card tips-card'
                        ></animated.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Tips;
