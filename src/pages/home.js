import React from 'react';

import Title from '../components/Title';
import TextBlock from '../components/TextBlock';

const Home = () => {
    return (
        <div className='inner'>
            <Title lineContent='Un métier,' lineContent2='Une passion' />
            <TextBlock />
        </div>
    );
};

export default Home;
