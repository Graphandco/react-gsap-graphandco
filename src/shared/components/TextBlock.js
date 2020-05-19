import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Textblock = (props) => {
    let bloc = useRef(null);

    useEffect(() => {
        gsap.from([bloc], 0.8, {
            delay: 0.5,
            ease: 'power3.out',
            y: 64,
            opacity: 0,
            stagger: {
                amount: 0.15,
            },
        });
    }, [bloc]);
    return (
        <div className='text-block'>
            <div
                ref={(el) => (bloc = el)}
                className='line'
                dangerouslySetInnerHTML={{
                    __html: props.content,
                }}
            ></div>
        </div>
    );
};

export default Textblock;
