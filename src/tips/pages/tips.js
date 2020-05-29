import React, { useState, useContext } from 'react';
//import { useTrail, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import { TipContext } from '../components/TipContext';
import { motion } from 'framer-motion';

//import Loader from '../../shared/components/Loader';
import TipSearch from '../components/TipSearch';
import TipCard from '../components/TipCard';

import './Tips.scss';

const Tips = ({ variant, transition }) => {
    const dynamicSort = (property) => {
        let sortOrder = 1;
        if (property[0] === '-') {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            /* next line works with strings and numbers,
             * and you may want to customize it to your needs
             */
            let result =
                a[property] < b[property]
                    ? -1
                    : a[property] > b[property]
                    ? 1
                    : 0;
            return result * sortOrder;
        };
    };

    const [tips] = useContext(TipContext);
    tips.sort(dynamicSort('langage'));
    //const [isLoading, setIsLoading] = useContext(TipContext);
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

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
                delayChildren: 0.5,
            },
        },
    };

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    return (
        <motion.section
            className='tips'
            initial='initial'
            animate='in'
            exit='out'
            variants={variant}
            transition={transition}
        >
            <h1>Liste de tips</h1>
            <TipSearch
                searchHandle={handleSearchInputChange}
                filterHandle={handleRadioValueChange}
                value={radioValue}
            />

            <motion.div
                className='tips-list'
                variants={container}
                initial='hidden'
                animate='show'
            >
                {filteredTips.map((tip) => {
                    return (
                        <motion.div
                            className='card tips-card'
                            key={tip.id}
                            variants={item}
                            initial='hidden'
                            animate='show'
                        >
                            <Link to={`/tips/${tip.id}`}>
                                <TipCard tip={tip} />
                            </Link>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.section>
    );
};

export default Tips;
