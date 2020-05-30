import React from 'react';
import Slider from 'react-slick';

import '../../shared/styles/slick.scss';

const AboutExp = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <h2>Expérience Professionnelle</h2>
            <section className='about-competences'>
                <Slider {...settings}>
                    <div className='test'>
                        <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Doloremque distinctio perspiciatis, eveniet
                            consequuntur totam quia, fuga ullam perferendis et
                            at expedita maxime voluptatem vero tempora dolor, ab
                            a ex quidem cumque incidunt asperiores! Velit, quae
                            eveniet in rem nulla nemo eaque optio quas,
                            explicabo dignissimos illo, dicta consectetur totam?
                            Totam.
                        </span>
                    </div>
                    <div className='test'>
                        <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Doloremque distinctio perspiciatis, eveniet
                            consequuntur totam quia, fuga ullam perferendis et
                            at expedita maxime voluptatem vero tempora dolor, ab
                            a ex quidem cumque incidunt asperiores! Velit, quae
                            eveniet in rem nulla nemo eaque optio quas,
                            explicabo dignissimos illo, dicta consectetur totam?
                            Totam.
                        </span>
                    </div>
                    <div className='test'>
                        <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Doloremque distinctio perspiciatis, eveniet
                            consequuntur totam quia, fuga ullam perferendis et
                            at expedita maxime voluptatem vero tempora dolor, ab
                            a ex quidem cumque incidunt asperiores! Velit, quae
                            eveniet in rem nulla nemo eaque optio quas,
                            explicabo dignissimos illo, dicta consectetur totam?
                            Totam.
                        </span>
                    </div>
                    <div className='test'>
                        <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Doloremque distinctio perspiciatis, eveniet
                            consequuntur totam quia, fuga ullam perferendis et
                            at expedita maxime voluptatem vero tempora dolor, ab
                            a ex quidem cumque incidunt asperiores! Velit, quae
                            eveniet in rem nulla nemo eaque optio quas,
                            explicabo dignissimos illo, dicta consectetur totam?
                            Totam.
                        </span>
                    </div>
                </Slider>
            </section>
        </>
    );
};

export default AboutExp;
