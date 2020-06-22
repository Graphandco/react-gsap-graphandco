import React, { useState } from 'react';

import Slider from '@material-ui/core/Slider';
import SchoolIcon from '@material-ui/icons/School';

const Parcours = () => {
    const steps = [
        {
            value: 2008,
            label: '2008',
        },
        {
            value: 2010,
            label: 2010,
        },
        {
            value: 2012,
            label: '2012',
        },
        {
            value: 2014,
            label: '2014',
        },
        {
            value: 2016,
            label: '2016',
        },
        {
            value: 2018,
            label: '2018',
        },
        {
            value: 2020,
            label: '2020',
        },
    ];

    const [year, setyear] = useState(2008);

    const getYearValue = (value) => {
        setyear(Math.floor(value));
        return;
    };

    return (
        <>
            <h2>
                <SchoolIcon className='title-icon' />
                Mon parcours dans le web
            </h2>

            <div className='about__parcours'>
                <div className='about__parcours__slider'>
                    <Slider
                        defaultValue={2008}
                        getAriaValueText={getYearValue}
                        //aria-labelledby='discrete-slider-always'
                        min={2008}
                        max={2020}
                        step={0.0001}
                        marks={steps}
                        //valueLabelDisplay='on'
                    />
                </div>
                <div className='about__parcours__content'>
                    <div className='about__parcours__content__year'>{year}</div>
                </div>
            </div>

            {/* <section className='parcours'>
                <parcours__item>
                    <div className='parcours__item_image'></div>
                </parcours__item>
            </section> */}
        </>
    );
};

export default Parcours;
