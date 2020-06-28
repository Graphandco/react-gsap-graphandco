import React, { useState, useContext } from 'react';
//import { useTrail, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import { TipContext } from '../components/TipContext';
import { motion } from 'framer-motion';

//import Loader from '../../shared/components/Loader';
import TipSearch from '../components/TipSearch';
import TipCard from '../components/TipCard';
import QuickTip from '../../shared/images/quicktips.png';
import TipsPagination from '../components/TipsPagination';

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

    //const [isLoading, setIsLoading] = useContext(TipContext);
    const [searchText, setSearchText] = useState('');
    const [radioValue, setRadioValue] = useState('');
    const [tips] = useContext(TipContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [tipsPerPage, setTipsPerPage] = useState(5);
    tips.sort(dynamicSort('langage'));

    //EVENT HANDLERS
    const handleSearchInputChange = (event) => {
        setSearchText(event.target.value);
        setCurrentPage(1);
    };

    const handleRadioValueChange = (event) => {
        setRadioValue(event.target.value);
        setCurrentPage(1);
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

    //GETTING CURRENT FILTERED LIST
    const indexOfLastTip = currentPage * tipsPerPage;
    const indexOfFirstTip = indexOfLastTip - tipsPerPage;
    const currentTips = filteredTips.slice(indexOfFirstTip, indexOfLastTip);

    //CHANGE PAGE
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            <h1 className='overlay-title'>Coding tips</h1>
            <div className='tips-desc'>
                <div className='tip-desc-text'>
                    Il nous arrive à tous de chercher des bouts de code dont on
                    a besoin de façon quotidienne. J'en ai rassemblé quelques
                    uns ici que je continuerai d'alimenter au fur et à mesure.
                </div>
                <img src={QuickTip} alt='QuickTip' />
            </div>
            <TipSearch
                searchHandle={handleSearchInputChange}
                filterHandle={handleRadioValueChange}
                value={radioValue}
            />
            {/* HIDE NAV IF JUST ONE PAGE */}
            {/* {filteredTips.length > tipsPerPage && } */}
            <TipsPagination
                tipsPerPage={tipsPerPage}
                setTipsPerPage={setTipsPerPage}
                totalTips={filteredTips.length}
                paginate={paginate}
                currentPage={currentPage}
                tipsCurrentLength={filteredTips.length}
            />

            <motion.div
                className='tips-list'
                variants={tipsVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
                {currentTips.map((tip) => {
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
