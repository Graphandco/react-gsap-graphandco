import React from 'react';
//import styled from 'styled-components';
import { motion } from 'framer-motion';

// const Svg = styled.div`
//     mask: url(${(props) => props.src}) no-repeat center / contain;
//     webkit-mask: url(${(props) => props.src}) no-repeat center / contain;
//     background-color: var(--default-text-color);
//     width: 30px;
//     height: 30px;
// `;

const AboutCompetencesItem = ({ competences }) => {
    const progress = 440 - (440 * `${competences.power}`) / 100;
    const speedProgress = Math.abs(progress - 200 / 10);
    console.log(speedProgress);

    const circleVariants = {
        hidden: {
            strokeDashoffset: 440,
        },
        visible: {
            strokeDashoffset: progress,
            transition: {
                duration: 2,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <div className='progress-bar'>
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
                        animate='visible'
                    ></motion.circle>
                </svg>
                <div className='number'>
                    <span>{competences.power}%</span>
                </div>
            </div>
            <div className='name'>{competences.name}</div>
        </div>
    );
};

export default AboutCompetencesItem;
