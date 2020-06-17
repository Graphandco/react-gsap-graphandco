import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
//import styled from 'styled-components';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

// const Svg = styled.div`
//     mask: url(${(props) => props.src}) no-repeat center / contain;
//     webkit-mask: url(${(props) => props.src}) no-repeat center / contain;
//     background-color: var(--default-text-color);
//     width: 30px;
//     height: 30px;
// `;

const AboutCompetencesItem = ({ competences }) => {
    // Ref for our element
    const sectionRef = useRef(null);
    // All the ref to be observed
    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: .4,
    });

    const progress = 440 - (440 * `${competences.power}`) / 100;
    const speedProgress = `${competences.power}` / 30;

    //console.log(speedProgress);

    const circleVariants = {
        hidden: {
            strokeDashoffset: 440,
        },
        visible: {
            strokeDashoffset: progress,
            transition: {
                duration: speedProgress,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <>


            <div className='progress-bar' ref={sectionRef}>

                <div className='percent'>
                    <svg>
                        <circle cx='70' cy='70' r='70'></circle>
                        <motion.circle
                            cx='70'
                            cy='70'
                            r='70'
                            style={{
                                strokeDasharray: 440,
                                stroke: `${competences.color}`,
                            }}
                            variants={circleVariants}
                            initial='hidden'
                            animate={
                                intersection &&
                                intersection.intersectionRatio < .4
                                    ? 'hidden'
                                    : 'visible'
                            }
                        ></motion.circle>
                    </svg>
                    
                    <div className='number'>
                        {
                            intersection && 
                            intersection.intersectionRatio < .4 
                            ? ''
                            : 
                            <CountUp start={0} end={parseInt(competences.power)} duration={parseInt(speedProgress)} suffix="%" />
                        }

                    </div>
                </div>
                <div className='name'>{competences.name}</div>
            </div>
        </>
    );
};

export default AboutCompetencesItem;
