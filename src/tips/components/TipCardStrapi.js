import React from 'react';

const TipCardStrapi = (props) => {
    const langage = props.tip.categories[0].Name;

    return (
        <>
            <div
                className='tip-title'
                dangerouslySetInnerHTML={{
                    __html: props.tip.Title,
                }}
            ></div>
            {/* <div>{props.tip.Code}</div> */}
            <img
                className='tip-image'
                src={`/images/langages/${langage}.jpg`}
                alt=''
            />
        </>
    );
};

export default TipCardStrapi;
