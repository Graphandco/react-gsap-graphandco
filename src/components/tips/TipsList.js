import React from 'react';
import { Link } from 'react-router-dom';

import Title from '../Title';
import TextBlock from '../TextBlock';

const TipsList = (props) => {
    const tips = props.tips;

    return (
        <section className='inner'>
            <div className='block block-content'>
                <Title lineContent='Liste' lineContent2='de tips' />

                <ul>
                    {tips.map((tip) => (
                        <li key={tip.id} id={tip.id}>
                            <Link className='tip-card' to={`/tips/${tip.id}`}>
                                <TextBlock
                                    content={tip.title.rendered}
                                    dangerouslySetInnerHTML={{
                                        __html: tip.title.rendered,
                                    }}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default TipsList;
