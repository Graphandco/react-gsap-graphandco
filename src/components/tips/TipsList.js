import React from 'react';
import { Link } from 'react-router-dom';

const TipsList = (props) => {
    const tips = props.tips;
    return (
        <div className='tiplist'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus quod dolores optio dignissimos magni suscipit saepe
                sequi tempora quas quidem?
            </p>
            <ul className='tips-list'>
                {tips.map((tip) => (
                    <li key={tip.id} id={tip.id}>
                        <Link className='tip-card' to={`/tips/${tip.id}`}>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: tip.title.rendered,
                                }}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TipsList;
