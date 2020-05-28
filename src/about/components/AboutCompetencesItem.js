import React from 'react';
import styled from 'styled-components';

const Power = styled.div`
    width: ${(props) => props.width}%;
`;
const AboutCompetencesItem = ({ competences }) => {
    return (
        <div className='competences-item'>
            <div className='competences__title'>
                <img
                    src={competences.image}
                    alt={competences.name}
                    className='competence__svg'
                />
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
