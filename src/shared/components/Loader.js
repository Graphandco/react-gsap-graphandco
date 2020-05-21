import React from 'react';

const myStyle = {
    position: 'absolute',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
};

const Loader = () => (
    <div className='loader' style={myStyle}>
        {/* Spinning */}
        <>
            {/* <svg
            width='38'
            height='38'
            viewBox='0 0 38 38'
            xmlns='http://www.w3.org/2000/svg'
            >
            <defs>
                <linearGradient
                    x1='8.042%'
                    y1='0%'
                    x2='65.682%'
                    y2='23.865%'
                    id='a'
                    >
                    <stop stop-color='#fff' stop-opacity='0' offset='0%' />
                    <stop
                        stop-color='#fff'
                        stop-opacity='.631'
                        offset='63.146%'
                        />
                    <stop stop-color='#fff' offset='100%' />
                </linearGradient>
            </defs>
            <g fill='none' fill-rule='evenodd'>
                <g transform='translate(1 1)'>
                    <path
                        d='M36 18c0-9.94-8.06-18-18-18'
                        id='Oval-2'
                        stroke='url(#a)'
                        stroke-width='2'
                        >
                        <animateTransform
                            attributeName='transform'
                            type='rotate'
                            from='0 18 18'
                            to='360 18 18'
                            dur='0.9s'
                            repeatCount='indefinite'
                            />
                    </path>
                    <circle fill='#fff' cx='36' cy='18' r='1'>
                        <animateTransform
                            attributeName='transform'
                            type='rotate'
                            from='0 18 18'
                            to='360 18 18'
                            dur='0.9s'
                            repeatCount='indefinite'
                            />
                    </circle>
                </g>
            </g>
        </svg> */}
        </>
        {/* Triangle dots */}
        <>
            {/* <svg
            width='57'
            height='57'
            viewBox='0 0 57 57'
            xmlns='http://www.w3.org/2000/svg'
            stroke='#fff'
        >
            <g fill='none' fill-rule='evenodd'>
                <g transform='translate(1 1)' stroke-width='2'>
                    <circle cx='5' cy='50' r='5'>
                        <animate
                            attributeName='cy'
                            begin='0s'
                            dur='2.2s'
                            values='50;5;50;50'
                            calcMode='linear'
                            repeatCount='indefinite'
                        />
                        <animate
                            attributeName='cx'
                            begin='0s'
                            dur='2.2s'
                            values='5;27;49;5'
                            calcMode='linear'
                            repeatCount='indefinite'
                        />
                    </circle>
                    <circle cx='27' cy='5' r='5'>
                        <animate
                            attributeName='cy'
                            begin='0s'
                            dur='2.2s'
                            from='5'
                            to='5'
                            values='5;50;50;5'
                            calcMode='linear'
                            repeatCount='indefinite'
                        />
                        <animate
                            attributeName='cx'
                            begin='0s'
                            dur='2.2s'
                            from='27'
                            to='27'
                            values='27;49;5;27'
                            calcMode='linear'
                            repeatCount='indefinite'
                        />
                    </circle>
                    <circle cx='49' cy='50' r='5'>
                        <animate
                            attributeName='cy'
                            begin='0s'
                            dur='2.2s'
                            values='50;50;5;50'
                            calcMode='linear'
                            repeatCount='indefinite'
                        />
                        <animate
                            attributeName='cx'
                            from='49'
                            to='49'
                            begin='0s'
                            dur='2.2s'
                            values='49;5;27;49'
                            calcMode='linear'
                            repeatCount='indefinite'
                        />
                    </circle>
                </g>
            </g>
        </svg> */}
        </>
        {/* 3 Bars */}
        <svg
            width='75'
            height='75'
            viewBox='0 0 135 140'
            xmlns='http://www.w3.org/2000/svg'
            fill='#fff'
        >
            <rect y='10' width='15' height='120' rx='6'>
                <animate
                    attributeName='height'
                    begin='0.5s'
                    dur='1s'
                    values='120;110;100;90;80;70;60;50;40;140;120'
                    calcMode='linear'
                    repeatCount='indefinite'
                />
                <animate
                    attributeName='y'
                    begin='0.5s'
                    dur='1s'
                    values='10;15;20;25;30;35;40;45;50;0;10'
                    calcMode='linear'
                    repeatCount='indefinite'
                />
            </rect>
            <rect x='30' y='10' width='15' height='120' rx='6'>
                <animate
                    attributeName='height'
                    begin='0.25s'
                    dur='1s'
                    values='120;110;100;90;80;70;60;50;40;140;120'
                    calcMode='linear'
                    repeatCount='indefinite'
                />
                <animate
                    attributeName='y'
                    begin='0.25s'
                    dur='1s'
                    values='10;15;20;25;30;35;40;45;50;0;10'
                    calcMode='linear'
                    repeatCount='indefinite'
                />
            </rect>
            <rect x='60' width='15' height='140' rx='6'>
                <animate
                    attributeName='height'
                    begin='0s'
                    dur='1s'
                    values='120;110;100;90;80;70;60;50;40;140;120'
                    calcMode='linear'
                    repeatCount='indefinite'
                />
                <animate
                    attributeName='y'
                    begin='0s'
                    dur='1s'
                    values='10;15;20;25;30;35;40;45;50;0;10'
                    calcMode='linear'
                    repeatCount='indefinite'
                />
            </rect>
            <rect x='90' y='10' width='15' height='120' rx='6'>
                <animate
                    attributeName='height'
                    begin='0.25s'
                    dur='1s'
                    values='120;110;100;90;80;70;60;50;40;140;120'
                    calcMode='linear'
                    repeatCount='indefinite'
                />
                <animate
                    attributeName='y'
                    begin='0.25s'
                    dur='1s'
                    values='10;15;20;25;30;35;40;45;50;0;10'
                    calcMode='linear'
                    repeatCount='indefinite'
                />
            </rect>
            <rect x='120' y='10' width='15' height='120' rx='6'>
                <animate
                    attributeName='height'
                    begin='0.5s'
                    dur='1s'
                    values='120;110;100;90;80;70;60;50;40;140;120'
                    calcMode='linear'
                    repeatCount='indefinite'
                />
                <animate
                    attributeName='y'
                    begin='0.5s'
                    dur='1s'
                    values='10;15;20;25;30;35;40;45;50;0;10'
                    calcMode='linear'
                    repeatCount='indefinite'
                />
            </rect>
        </svg>
    </div>
);

export default Loader;
