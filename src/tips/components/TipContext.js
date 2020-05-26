import React, { useState, createContext, useEffect } from 'react';
import Axios from 'axios';

export const TipContext = createContext();

export const TipProvider = (props) => {
    const [tips, setTips] = useState([]);
    //const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleTipListing = async () => {
            //setIsLoading(true);
            try {
                const response = await Axios.get(
                    'https://www.graphandco.com/wp-json/wp/v2/coding-tips?per_page=100'
                );
                //console.log(response.data);
                setTips(response.data);
                //setIsLoading(false);
                tips.reverse();
            } catch (e) {
                console.log(
                    'Une erreur est survenue lors de la récupération des Tips'
                );
            }
        };
        handleTipListing();
    }, [tips, setTips]);

    return (
        <TipContext.Provider value={[tips]}>
            {props.children}
        </TipContext.Provider>
    );
};
