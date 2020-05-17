import React, { useState, useEffect } from 'react';
import Title from '../components/Title';
import TextBlock from '../components/TextBlock';
import Axios from 'axios';

const About = () => {
    const [titleLine1, setTitleLine1] = useState([]);
    const [titleLine2, setTitleLine2] = useState([]);
    //const [pageContent, setPageContent] = useState([]);

    //GETTING ABOUT PAGE INFOS
    useEffect(() => {
        const handleAboutInfos = async () => {
            try {
                const response = await Axios.get('/pages/124');
                console.log(response.data);
                setTitleLine1(response.data.acf.ligne_1);
                setTitleLine2(response.data.acf.ligne_2);
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
        <div className='inner'>
            <Title lineContent={titleLine1} lineContent2={titleLine2} />

            <TextBlock />
        </div>
    );
};

export default About;
