import React from 'react';

const TipCardStrapi = (props) => {
    //const langage = props.tip.acf.langage;

    return (
        <>
            <div
                className='tip-title'
                dangerouslySetInnerHTML={{
                    __html: props.tip.Title,
                }}
            ></div>
            {/* <img
                className='tip-image'
                src={`/images/langages/${langage}.jpg`}
                alt=''
            /> */}
        </>
    );
};

export default TipCardStrapi;
