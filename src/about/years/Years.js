import React from 'react';

const Years = (props) => {
    return (
        <div className='year'>
            <div className='title'>{props.title}</div>
            <div className='content'>{props.content}</div>
        </div>
    );
};

export default Years;
