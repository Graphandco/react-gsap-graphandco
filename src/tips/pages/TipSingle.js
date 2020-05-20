import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Axios from 'axios';

import './TipSingle.scss';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const TipSingle = () => {
    const { id } = useParams();

    const [tipTitle, setTipTitle] = useState('');
    const [tipContent, setTipContent] = useState('');
    const [tipCode, setTipCode] = useState('');
    const [tipLangage, setTipLangage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    //GETTING ONE TIP
    useEffect(() => {
        const handleTipListing = async () => {
            setIsLoading(true);
            try {
                const response = await Axios.get(`/coding-tips/${id}`);
                console.log(response.data);
                setTipTitle(response.data.title.rendered);
                setTipContent(response.data.content.rendered);
                setTipCode(response.data.acf.code);
                setTipLangage(response.data.acf.langage);
                setIsLoading(false);
            } catch (e) {
                console.log(
                    'Une erreur est survenue lors de la récupération des Tips'
                );
            }
        };
        handleTipListing();
    }, [id]);

    return (
        <div className='tip-single'>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h1
                        dangerouslySetInnerHTML={{
                            __html: tipTitle,
                        }}
                    />
                    <div
                        className='tip-content'
                        dangerouslySetInnerHTML={{
                            __html: tipContent,
                        }}
                    />
                    <div className='tip-code'>
                        <SyntaxHighlighter
                            style={atomDark}
                            language={tipLangage}
                        >
                            {tipCode}
                        </SyntaxHighlighter>
                    </div>
                </>
            )}
        </div>
    );
};

export default TipSingle;
