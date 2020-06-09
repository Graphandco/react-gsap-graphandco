import React from 'react';
import styled from 'styled-components';

const Power = styled.div`
    width: ${(props) => props.width}%;
`;

const Svg = styled.div`
    mask: url(${(props) => props.src}) no-repeat center / contain;
    webkit-mask: url(${(props) => props.src}) no-repeat center / contain;
    background-color: var(--default-text-color);
    width: 30px;
    height: 30px;
`;

const AboutCompetencesItem = ({ competences }) => {
    return (
        <div className='about__competences__item'>
            <div className='about__competences__item__title'>
                <Svg src={competences.image} />
                <span className='about__competences__item__title__name'>
                    {competences.name}
                </span>
            </div>
            <div className='about__competences__item__power'>
                <Power
                    width={competences.power}
                    className='about__competences__item__power-grade'
                />
            </div>
        </div>
    );
};

export default AboutCompetencesItem;
