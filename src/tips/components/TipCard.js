import React from 'react';

const TipCard = ({ tip }) => {
    const langage = tip.acf.langage;
    const title = tip.title.rendered;

    return (
        <>
            <div
                className='tip-title'
                dangerouslySetInnerHTML={{
                    __html: title,
                }}
            ></div>
            <img
                className='tip-image'
                src={`/images/langages/${langage}.jpg`}
                alt=''
            />
        </>
    );
};

export default TipCard;
