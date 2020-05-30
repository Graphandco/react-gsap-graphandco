import React from 'react';
import styled from 'styled-components';
import CSS from '../../shared/images/competences/CSS.svg';
import PHP from '../../shared/images/competences/PHP.svg';
import Javascript from '../../shared/images/competences/Javascript.svg';
import Prestashop from '../../shared/images/competences/Prestashop.svg';

const Svg = styled.div`
    mask: url(${(props) => props.src}) no-repeat center / contain;
    webkit-mask: url(${(props) => props.src}) no-repeat center / contain;
    background-color: ${(props) => props.color};
    width: 25px;
    height: 25px;
`;

const TipCard = ({ tip }) => {
    const langage = tip.acf.langage;
    const title = tip.title.rendered;
    let langageSvg;
    let color;

    //console.log(image);

    //console.log(langage);

    switch (langage) {
        case 'css':
            langageSvg = CSS;
            color = '#2763ea';
            break;
        case 'php':
            langageSvg = PHP;
            color = '#7478ae';
            break;
        case 'javascript':
            langageSvg = Javascript;
            color = '#f0d91d';
            break;
        case 'prestashop':
            langageSvg = Prestashop;
            color = '#9fd4e4';
            break;
        default:
            langageSvg = '../../shared/images/competences/PHP.svg';
    }

    return (
        <>
            <div className='tips__card__title'>
                <span
                    //style={{ backgroundColor: color }}
                    dangerouslySetInnerHTML={{
                        __html: title,
                    }}
                ></span>
                <div
                    className='tips__card__title__langage'
                    style={{ backgroundColor: color }}
                >
                    <Svg src={langageSvg} color='#FFF' />
                </div>
            </div>
        </>
    );
};

export default TipCard;
