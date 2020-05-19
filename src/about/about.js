import React, { useState, useEffect } from 'react';
import Title from '../shared/components/Title';
import TextBlock from '../shared/components/TextBlock';
import ImageBlock from '../shared/components/ImageBlock';
import Axios from 'axios';

const About = () => {
    const [titleLine1, setTitleLine1] = useState([]);
    const [titleLine2, setTitleLine2] = useState([]);
    const [textBlock, setTextBlock] = useState([]);
    //const [pageContent, setPageContent] = useState([]);

    //GETTING ABOUT PAGE INFOS
    useEffect(() => {
        const handleAboutInfos = async () => {
            try {
                const response = await Axios.get('/pages/124');
                console.log(response.data);
                setTitleLine1(response.data.acf.ligne_1);
                setTitleLine2(response.data.acf.ligne_2);
                setTextBlock(response.data.content.rendered);
                //setPageContent(response.data.content.rendered);
            } catch (e) {
                console.log(
                    'Une erreur est survenue lors de la récupération des Tips'
                );
            }
        };
        handleAboutInfos();
    }, []);

    return (
        <section className='inner'>
            <div className='block block-content'>
                <Title lineContent={titleLine1} lineContent2={titleLine2} />
                <TextBlock content={textBlock} />
            </div>
            <ImageBlock />
        </section>
    );
};

export default About;
