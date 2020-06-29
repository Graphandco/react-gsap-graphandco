import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from '@material-ui/core/Slider';
import SchoolIcon from '@material-ui/icons/School';
import Years from './years/Years';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { useMediaQuery } from '@material-ui/core';

const AboutParcours = () => {
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

    const [value, setValue] = useState(2008);

    const roundValue = Math.floor(value);

    const handleSliderChange = (e, newValue) => {
        setValue(newValue);
    };

    const incrementValue = () => {
        roundValue < 2020 && setValue(value + 1);
    };
    const decrementValue = () => {
        roundValue > 2008 && setValue(value - 1);
    };

    const parcours = [
        {
            id: 0,
            year: 2008,
            title: 'Premiers pas dans le Web',
            content:
                'Découverte des fonctionnements de base, réalisation de mon premier site en HTML',
        },
        {
            id: 1,
            year: 2009,
            title: 'Lorem ipsum dolor sit amet.',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae unde repudiandae adipisci voluptates. Voluptatibus aliquam neque consequatur deleniti, eligendi sapiente voluptatem odit ipsam facere itaque',
        },
        {
            id: 2,
            year: 2010,
            title: 'Webmarketing',
            content:
                'lorem25 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus doloremque sequi, nam voluptatibus perspiciatis beatae distinctio porro minus cum impedit laudantium voluptas harum expedita provident!',
        },
        {
            id: 3,
            year: 2011,
            title: 'Lorem ipsum dolor sit amet.',
            content:
                'Lorem ipsum dolor, lorem25 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectussit amet consectetur adipisicing elit. Delectus doloremque sequi, nam voluptatibus perspiciatis beatae distinctio porro minus cum impedit laudantium voluptas harum expedita provident!',
        },
        {
            id: 4,
            year: 2012,
            title: 'Lorem ipsum dolor sit amet.',
            content:
                'Lorem ipsum dolor, lorem25 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectussit amet consectetur adipisicing elit. Delectus doloremque sequi, nam voluptatibus perspiciatis beatae distinctio porro minus cum impedit laudantium voluptas harum expedita provident!',
        },
        {
            id: 5,
            year: 2013,
            title: 'Lorem ipsum dolor sit amet.',
            content:
                'Lorem ipsum dolor, lorem25 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectussit amet consectetur adipisicing elit. Delectus doloremque sequi, nam voluptatibus perspiciatis beatae distinctio porro minus cum impedit laudantium voluptas harum expedita provident!',
        },
        {
            id: 6,
            year: 2014,
            title: 'Lorem ipsum dolor sit amet.',
            content:
                'Lorem ipsum dolor, lorem25 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectussit amet consectetur adipisicing elit. Delectus doloremque sequi, nam voluptatibus perspiciatis beatae distinctio porro minus cum impedit laudantium voluptas harum expedita provident!',
        },
        {
            id: 7,
            year: 2015,
            title: 'Lorem ipsum dolor sit amet.',
            content:
                'Lorem ipsum dolor, lorem25 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectussit amet consectetur adipisicing elit. Delectus doloremque sequi, nam voluptatibus perspiciatis beatae distinctio porro minus cum impedit laudantium voluptas harum expedita provident!',
        },
        {
            id: 8,
            year: 2016,
            title: 'Lorem ipsum dolor sit amet.',
            content:
                'Lorem ipsum dolor, lorem25 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectussit amet consectetur adipisicing elit. Delectus doloremque sequi, nam voluptatibus perspiciatis beatae distinctio porro minus cum impedit laudantium voluptas harum expedita provident!',
        },
        {
            id: 9,
            year: 2017,
            title: 'Lorem ipsum dolor sit amet.',
            content:
                'Lorem ipsum dolor, lorem25 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectussit amet consectetur adipisicing elit. Delectus doloremque sequi, nam voluptatibus perspiciatis beatae distinctio porro minus cum impedit laudantium voluptas harum expedita provident!',
        },
        {
            id: 10,
            year: 2018,
            title: 'Lorem ipsum dolor sit amet.',
            content:
                'Lorem ipsum dolor, lorem25 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectussit amet consectetur adipisicing elit. Delectus doloremque sequi, nam voluptatibus perspiciatis beatae distinctio porro minus cum impedit laudantium voluptas harum expedita provident!',
        },
        {
            id: 11,
            year: 2019,
            title: 'Lorem ipsum dolor sit amet.',
            content:
                'Lorem ipsum dolor, lorem25 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectussit amet consectetur adipisicing elit. Delectus doloremque sequi, nam voluptatibus perspiciatis beatae distinctio porro minus cum impedit laudantium voluptas harum expedita provident!',
        },
        {
            id: 12,
            year: 2020,
            title: 'Lorem ipsum dolor sit amet.',
            content:
                'Lorem ipsum dolor, lorem25 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectussit amet consectetur adipisicing elit. Delectus doloremque sequi, nam voluptatibus perspiciatis beatae distinctio porro minus cum impedit laudantium voluptas harum expedita provident!',
        },
    ];

    const yearVariants = {
        hidden: {
            x: -300,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
        },
        exit: {
            opacity: 0,
            x: 300,
        },
    };

    const yearTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.4,
    };

    return (
        <>
            <h2>
                <SchoolIcon className='title-icon' />
                Mon parcours dans le web
            </h2>

            <div className='parcours'>
                <div className='slider'>
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
                    <div className='year-item'>
                        <div className='input'>
                            <motion.div className='value'>
                                {roundValue}
                            </motion.div>
                            <div className='controls'>
                                <motion.div
                                    className='btn'
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.3 },
                                    }}
                                    onClick={decrementValue}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <IndeterminateCheckBoxIcon />
                                </motion.div>

                                <motion.div
                                    className='btn'
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.3 },
                                    }}
                                    onClick={incrementValue}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <AddBoxIcon />
                                </motion.div>
                            </div>
                        </div>
                        <div className='content'>
                            <AnimatePresence exitBeforeEnter>
                                {parcours.map(
                                    (item) =>
                                        item.year === roundValue && (
                                            <motion.div
                                                key={item.id}
                                                variants={yearVariants}
                                                initial='hidden'
                                                animate='visible'
                                                exit='exit'
                                                transition={yearTransition}
                                            >
                                                <Years
                                                    year={value}
                                                    title={
                                                        parcours[item.id].title
                                                    }
                                                    content={
                                                        parcours[item.id]
                                                            .content
                                                    }
                                                />
                                            </motion.div>
                                        )
                                )}
                            </AnimatePresence>
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

export default AboutParcours;
