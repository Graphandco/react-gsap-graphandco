import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import TipsList from '../components/tips/TipsList';

const Tips = () => {
    const [tips, setTips] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //GETTING ALL TIPS
    useEffect(() => {
        const handleTipListing = async () => {
            setIsLoading(true);
            try {
                const response = await Axios.get('/coding-tips?per_page=100');
                //console.log(response.data);
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

    return (
        <>
            <h2>Liste de Tips</h2>

            <ul className='tips-list'>
                {isLoading ? <p>Loading...</p> : <TipsList tips={tips} />}
            </ul>
        </>
    );
};

export default Tips;
