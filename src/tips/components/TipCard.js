import React from 'react';
//import styled from 'styled-components';

// import JS from '../../shared/images/competences/js.png';
// import CSS3 from '../../shared/images/competences/css.png';
// import PHP7 from '../../shared/images/competences/php.png';
// import Presta from '../../shared/images/competences/prestashop.png';

import JSIcon from '../../shared/images/competences/icons/javascript.png';
import CSSIcon from '../../shared/images/competences/icons/css.png';
import PrestaIcon from '../../shared/images/competences/icons/prestashop.png';
import PHPIcon from '../../shared/images/competences/icons/php.png';
import ReactIcon from '../../shared/images/competences/icons/react.png';

// const Svg = styled.div`
//     mask: url(${(props) => props.src}) no-repeat center / contain;
//     webkit-mask: url(${(props) => props.src}) no-repeat center / contain;
//     background-color: ${(props) => props.color};
//     width: 25px;
//     height: 25px;
// `;

const TipCard = ({ tip }) => {
    const langage = tip.acf.langage;
    const short = tip.acf.short;
    const title = tip.title.rendered;
    let icon;
    //let langageImage;
    //let color;

    //console.log(image);

    //console.log(langage);

    // switch (langage) {
    //     case 'css':
    //         langageSvg = CSS;
    //         color = '#2763ea';
    //         break;
    //     case 'php':
    //         langageSvg = PHP;
    //         color = '#7478ae';
    //         break;
    //     case 'javascript':
    //         langageSvg = JS;
    //         color = '#f0d91d';
    //         break;
    //     case 'prestashop':
    //         langageSvg = Prestashop;
    //         color = '#9fd4e4';
    //         break;
    //     default:
    //         langageSvg = '../../shared/images/competences/PHP.svg';
    // }
    switch (langage) {
        case 'css':
            //langageImage = CSS3;
            icon = CSSIcon;
            break;
        case 'php':
            //langageImage = PHP7;
            icon = PHPIcon;
            break;
        case 'javascript':
            //langageImage = JS;
            icon = JSIcon;
            break;
        case 'prestashop':
            //langageImage = Presta;
            icon = PrestaIcon;
            break;
        case 'react':
            //langageImage = Presta;
            icon = ReactIcon;
            break;
        default:
            //langageImage = '../../shared/images/competences/PHP.svg';
            icon = JSIcon;
    }

    return (
        // <>
        //     <div className='tips__card__title'>
        //         <span
        //             //style={{ backgroundColor: color }}
        //             dangerouslySetInnerHTML={{
        //                 __html: title,
        //             }}
        //         ></span>
        //         <div
        //             className='tips__card__title__langage'
        //             //style={{ backgroundColor: color }}
        //         >
        //             <Svg src={langageSvg} color='#FFF' />
        //         </div>
        //     </div>
        // </>
        <>
            <div className={`tips__card__line ${langage}`}></div>
            <div className='tips__card__content'>
                <img
                    className='tips__card__content__icon'
                    src={icon}
                    alt='Langage Icon'
                />
                <div className='tips__card__content__lead'>
                    <div className='tips__card__content__lead__title'>
                        {short}
                    </div>
                    <div className='tips__card__content__lead__langage'>
                        {langage}
                    </div>
                </div>
                <div
                    className='tips__card__content__desc'
                    dangerouslySetInnerHTML={{
                        __html: title,
                    }}
                ></div>
            </div>
            {/* <img
                className='tips__card__image'
                src={langageImage}
                alt='Langage'
            /> */}
        </>
    );
};

export default TipCard;
