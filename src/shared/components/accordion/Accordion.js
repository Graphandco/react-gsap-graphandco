import React, { useState, useRef } from 'react';
import Chevron from './Chevron';

const Accordion = (props) => {
    const [active, setActive] = useState('');
    const [height, setHeight] = useState('0px');

    const toggleAccordion = () => {
        setActive(active === '' ? 'active' : '');
        setHeight(
            active === 'active' ? '0px' : `${content.current.scrollHeight}px`
        );
        // setRotate(
        //     active === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
        // );
        //console.log(content.current.scrollHeight);
    };

    const content = useRef(null);

    return (
        <div className='accordion__section'>
            <button
                className={'accordion ' + (active && 'active')}
                onClick={toggleAccordion}
            >
                <p className='accordion__title'>{props.title}</p>
                <Chevron
                    className={'accordion__icon ' + (active && 'rotate')}
                    width={10}
                    fill={'#777'}
                />
            </button>
            <div
                ref={content}
                style={{ maxHeight: `${height}` }}
                //style={{ maxHeight: `active ? '0px' : ${height}` }}
                className='accordion__content'
            >
                <div className='accordion__text'>{props.children}</div>
            </div>
        </div>
    );
};

export default Accordion;
