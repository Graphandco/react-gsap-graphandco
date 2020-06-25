import React from 'react';

const Years = (props) => {
    return (
        <div className='about__parcours__content__wrapper__year'>
            <div className='title'>{props.title}</div>
            <div className='content'>{props.content}</div>
        </div>
    );
};

export default Years;
