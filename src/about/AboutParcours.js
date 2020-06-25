import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import SchoolIcon from '@material-ui/icons/School';
import Years from './years/Years';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { useMediaQuery } from '@material-ui/core';

const Parcours = () => {
    const isTabletOrMobile = useMediaQuery('(max-width: 768px)');

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

    //const [year, setyear] = useState(2008);
    const [value, setValue] = useState(2008);

    const handleSliderChange = (e, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const incrementValue = () => {
        value < 2020 && setValue(value + 1);
    };
    const decrementValue = () => {
        value > 2008 && setValue(value - 1);
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    // const getYearValue = (value) => {
    //     setyear(Math.floor(value));
    //     return;
    // };

    const parcours = [
        {
            id: 1,
            title: 'Premiers pas dans le Web',
            content:
                'Découverte des fonctionnements de base, réalisation de mon premier site en HTML',
        },
        {
            id: 2,
            title: 'Webmarketing',
            content:
                'lorem25 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus doloremque sequi, nam voluptatibus perspiciatis beatae distinctio porro minus cum impedit laudantium voluptas harum expedita provident!',
        },
    ];

    return (
        <>
            <h2>
                <SchoolIcon className='title-icon' />
                Mon parcours dans le web
            </h2>

            <div className='about__parcours'>
                <div className='about__parcours__slider'>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby='input-slider'
                        marks={steps}
                        defaultValue={2008}
                        min={2008}
                        max={2020}
                        step={0.0001}
                        orientation={
                            isTabletOrMobile ? 'vertical' : 'horizontal'
                        }
                    />
                    <div className='about__parcours__slider__input'>
                        <div className='about__parcours__slider__input__wrapper'>
                            <motion.button
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.3 },
                                }}
                                onClick={decrementValue}
                                whileTap={{ scale: 0.9 }}
                            >
                                <IndeterminateCheckBoxIcon />
                            </motion.button>

                            <Input
                                value={Math.floor(value)}
                                margin='dense'
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                disabled // inputProps={{
                                //     step: 1,
                                //     min: 2008,
                                //     max: 2020,
                                //     type: 'number',
                                //     'aria-labelledby': 'input-slider',
                                // }}
                            />

                            <motion.button
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.3 },
                                }}
                                onClick={incrementValue}
                                whileTap={{ scale: 0.9 }}
                            >
                                <AddBoxIcon />
                            </motion.button>
                        </div>
                    </div>
                    <div className='about__parcours__content'>
                        {/* <div className='about__parcours__content__year'>
                        {Math.floor(value)}
                    </div> */}
                        <div className='about__parcours__content__wrapper'>
                            {value < 2010 && (
                                <Years
                                    year={value}
                                    title={parcours[0].title}
                                    content={parcours[0].content}
                                />
                            )}
                            {value < 2012 && value >= 2010 && (
                                <Years
                                    year={value}
                                    title={parcours[1].title}
                                    content={parcours[1].content}
                                />
                            )}
                        </div>
                    </div>
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
