import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ImageBlock = (props) => {
    let image = useRef(null);

    useEffect(() => {
        gsap.from([image], 0.8, {
            delay: 1.5,
            ease: 'power3.out',
            x: 64,
            opacity: 0,
            stagger: {
                amount: 0.15,
            },
        });
    }, [image]);
    return (
        <div className='block block-image'>
            <img
                ref={(el) => (image = el)}
                src={`/images/home-bg.jpg`}
                alt=''
            />
        </div>
    );
};

export default ImageBlock;
