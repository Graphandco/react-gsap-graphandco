import React, { useState, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import Loader from '../../shared/components/Loader';
import TipSearch from '../components/TipSearch';
import TipCard from '../components/TipCard';

import './Tips.scss';

const Tips = () => {
    const [tips, setTips] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [radioValue, setRadioValue] = useState('');

    //EVENT HANDLERS
    const handleSearchInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleRadioValueChange = (event) => {
        setRadioValue(event.target.value);
    };

    //SETTING FILTERED TIPS
    const filteredTips = tips.filter((tip) => {
        return (
            tip.title.rendered
                .toLowerCase()
                .includes(searchText.toLowerCase()) &&
            tip.acf.langage.includes(radioValue)
        );
    });

    //GETTING ALL TIPS
    useEffect(() => {
        const handleTipListing = async () => {
            setIsLoading(true);
            try {
                const response = await Axios.get('/coding-tips?per_page=100');
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
    }, [setTips]);

    //ANIM CONFIG
    const config = {
        //duration: 1500,
        type: 'spring',
        ease: 'in-out',
    };

    const trail = useTrail(filteredTips.length, {
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
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <h1>Liste de tips</h1>
                    <TipSearch
                        searchHandle={handleSearchInputChange}
                        filterHandle={handleRadioValueChange}
                        value={radioValue}
                    />

                    <div className='tips-list'>
                        {trail.map((props, index) => {
                            return (
                                <animated.div
                                    key={filteredTips[index].id}
                                    style={props}
                                    className='card tips-card'
                                >
                                    <Link to={`/tips/${tips[index].id}`}>
                                        <TipCard
                                            key={filteredTips[index].id}
                                            tip={filteredTips[index]}
                                        />
                                    </Link>
                                </animated.div>
                            );
                        })}
                    </div>
                </>
            )}
        </section>
    );
};

export default Tips;