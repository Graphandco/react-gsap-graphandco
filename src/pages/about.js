import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Axios from 'axios';
import Title from '../components/Title';

const About = () => {
    const [titleLine1, setTitleLine1] = useState([]);
    const [titleLine2, setTitleLine2] = useState([]);
    const [pageContent, setPageContent] = useState([]);

    let bloc2 = useRef(null);
    let bloc3 = useRef(null);

    useEffect(() => {
        gsap.from(bloc2, 0.8, {
            delay: 1.6,
            ease: 'power3.out',
            opacity: 0,
            x: 64,
            stagger: {
                amount: 0.15,
            },
        });
        gsap.from(bloc3, 0.8, {
            delay: 1.6,
            ease: 'power3.out',
            opacity: 0,
            x: -64,
            stagger: {
                amount: 0.15,
            },
        });
    }, [bloc2, bloc3]);

    //GETTING ABOUT PAGE INFOS
    useEffect(() => {
        const handleAboutInfos = async () => {
            try {
                const response = await Axios.get('/pages/124');
                console.log(response.data);
                setTitleLine1(response.data.acf.ligne_1);
                setTitleLine2(response.data.acf.ligne_2);
                setPageContent(response.data.content.rendered);
            } catch (e) {
                console.log(
                    'Une erreur est survenue lors de la récupération des Tips'
                );
            }
        };
        handleAboutInfos();
    }, []);

    return (
        <>
            <div className='inner'>
                <Title lineContent={titleLine1} lineContent2={titleLine2} />
                <p
                    className='other'
                    dangerouslySetInnerHTML={{
                        __html: pageContent,
                    }}
                />
            </div>
            <div className='block2' ref={(el) => (bloc2 = el)}>
                Contenu2
            </div>
            <div className='block3' ref={(el) => (bloc3 = el)}>
                Contenu3
            </div>
        </>
    );
};

export default About;
