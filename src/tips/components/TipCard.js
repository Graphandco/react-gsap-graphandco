import React from 'react';

const TipCard = (props) => {
    const langage = props.tip.acf.langage;

    return (
        <>
            <div
                dangerouslySetInnerHTML={{
                    __html: props.tip.title.rendered,
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
