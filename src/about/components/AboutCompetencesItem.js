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
    console.log(competences.image);
    return (
        <div className='competences-item'>
            <div className='competences__title'>
                <Svg src={competences.image} />
                <span className='competences-name'>{competences.name}</span>
            </div>
            <div className='competences__power'>
                <Power
                    width={competences.power}
                    className='competences__power-grade'
                />
            </div>
        </div>
    );
};

export default AboutCompetencesItem;
