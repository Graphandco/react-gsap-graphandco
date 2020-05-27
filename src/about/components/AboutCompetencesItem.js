import React, { useContext } from 'react';
import { AboutContext } from './AboutContext';
import styled from 'styled-components';

const Power = styled.div`
    width: ${(props) => props.width}%;
`;
const AboutCompetencesItem = ({ competences }) => {
    return (
        <div className='competences-item'>
            <div className='competences-name'>{competences.name}</div>
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
