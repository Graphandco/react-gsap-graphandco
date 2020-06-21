import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router';
import Axios from 'axios';

import JSIcon from '../../shared/images/competences/icons/javascript.png';
import CSSIcon from '../../shared/images/competences/icons/css.png';
import PrestaIcon from '../../shared/images/competences/icons/prestashop.png';
import PHPIcon from '../../shared/images/competences/icons/php.png';
import ReactIcon from '../../shared/images/competences/icons/react.png';

// import Loader from '../../shared/components/Loader';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CustomButton from '../../shared/components/CustomButton';

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

    let langageImage;

    if (tipLangage === 'react') {
        langageImage = ReactIcon;
    } else if (tipLangage === 'css') {
        langageImage = CSSIcon;
    } else if (tipLangage === 'php') {
        langageImage = PHPIcon;
    } else if (tipLangage === 'javascript') {
        langageImage = JSIcon;
    } else if (tipLangage === 'prestashop') {
        langageImage = PrestaIcon;
    }

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

            <CustomButton
                link='/tips'
                title='Retour'
                prev
                ml='2rem'
                chevronSize='12'
            />

            <div className='tip-singlecontent'>
                <div className='tip-header'>
                    <div
                        className='tip-desc'
                        dangerouslySetInnerHTML={{
                            __html: tipContent,
                        }}
                    ></div>
                    <img src={langageImage} alt='Langage' />
                </div>

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
