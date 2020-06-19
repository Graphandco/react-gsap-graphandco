import React, { useState, useContext } from 'react';
//import { useTrail, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import { TipContext } from '../components/TipContext';
import { motion } from 'framer-motion';

//import Loader from '../../shared/components/Loader';
import TipSearch from '../components/TipSearch';
import TipCard from '../components/TipCard';
import QuickTip from '../../shared/images/quicktips.png';

const Tips = ({ variant, transition }) => {
    //TRI DES TIPS PAR TYPE
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

    const tipsVariants = {
        hidden: {
            opacity: 0,
            //y: '100vh',
            transition: {
                staggerChildren: 0.1,
            },
        },
        visible: {
            opacity: 1,
            //y: 0,
            transition: {
                type: 'spring',
                mass: 0.4,
                damping: 8,
                staggerChildren: 0.1,
                when: 'beforeChildren',
            },
        },
    };

    const tipVariants = {
        hidden: {
            //opacity: 0,
            //y: -100,
        },
        visible: {
            //opacity: 1,
            //y: 0,
        },
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
            <h1 className='overlay-title'>Liste de tips</h1>
            <div className='tips-desc'>
                <div className='tip-desc-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore quo sunt, accusantium exercitationem quis sit culpa,
                    repudiandae maiores in enim aut animi fugiat assumenda alias
                    consectetur corrupti non beatae atque ratione. Quam sed
                    soluta in libero maxime dolore excepturi ex accusantium
                    exercitationem consequuntur dolores voluptate id.
                </div>
                <img src={QuickTip} alt='QuickTip' />
            </div>
            <TipSearch
                searchHandle={handleSearchInputChange}
                filterHandle={handleRadioValueChange}
                value={radioValue}
            />

            <motion.div
                className='tips-list'
                variants={tipsVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
                {filteredTips.map((tip) => {
                    return (
                        <motion.div
                            className='tips__card'
                            key={tip.id}
                            variants={tipVariants}
                            // style={{
                            //     backgroundImage: `url(https://picsum.photos/500/800/?random&rnd82407${tip.id})`,
                            // }}
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
