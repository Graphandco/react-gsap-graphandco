import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

// import Loader from '../../shared/components/Loader';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const TipSingle = ({ variant, transition }) => {
    const { id } = useParams();

    const [tipTitle, setTipTitle] = useState('');
    const [tipContent, setTipContent] = useState('');
    const [tipCode, setTipCode] = useState('');
    const [tipLangage, setTipLangage] = useState('');
    //const [isLoading, setIsLoading] = useState(false);

    //GETTING ONE TIP
    useEffect(() => {
        const handleTipListing = async () => {
            //setIsLoading(true);
            try {
                const response = await Axios.get(
                    `https://www.graphandco.com/wp-json/wp/v2/coding-tips/${id}`
                );
                //console.log(response.data);
                setTipTitle(response.data.title.rendered);
                setTipContent(response.data.content.rendered);
                setTipCode(response.data.acf.code);
                setTipLangage(response.data.acf.langage);
                //setIsLoading(false);
            } catch (e) {
                console.log(
                    'Une erreur est survenue lors de la récupération des Tips'
                );
            }
        };
        handleTipListing();
    }, [id]);

    return (
        <motion.section
            //style={pageStyle}
            initial='initial'
            animate='in'
            exit='out'
            variants={variant}
            transition={transition}
            className='tip-single'
        >
            <h1
                dangerouslySetInnerHTML={{
                    __html: tipTitle,
                }}
            />
            <NavLink to='/tips' exact activeStyle={{}}>
                <Button variant='outlined' id='return' size='small'>
                    <span>
                        <ChevronLeftIcon /> <span>Retour aux tips</span>
                    </span>
                </Button>
            </NavLink>

            <div className='tip-singlecontent'>
                <div
                    className='tip-desc'
                    dangerouslySetInnerHTML={{
                        __html: tipContent,
                    }}
                />
                <div className='tip-code'>
                    <SyntaxHighlighter style={atomDark} language={tipLangage}>
                        {tipCode}
                    </SyntaxHighlighter>
                </div>
            </div>
        </motion.section>
    );
};

export default TipSingle;
