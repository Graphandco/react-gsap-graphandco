import React from 'react';

const TipCard = (props) => {
    return (
        <>
            <div
                dangerouslySetInnerHTML={{
                    __html: props.tip.title.rendered,
                }}
            ></div>
        </>
    );
};

export default TipCard;
