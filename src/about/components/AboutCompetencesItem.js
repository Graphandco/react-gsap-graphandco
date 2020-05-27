import React from 'react';
import styled from 'styled-components';

const Power = styled.div`
    width: ${(props) => props.width}%;
`;
const AboutCompetencesItem = ({ name, power }) => {
    return (
        <div className='competences-item'>
            <div className='competences-name'>{name}</div>
            <div className='competences__power'>
                <Power width={power} className='competences__power-grade' />
            </div>
        </div>
    );
};

export default AboutCompetencesItem;
