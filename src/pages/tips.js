import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Tips = () => {
    const [tips, setTips] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //GETTING ALL TIPS
    useEffect(() => {
        const handleTipListing = async () => {
            setIsLoading(true);
            try {
                const response = await Axios.get('/coding-tips?per_page=100');
                //console.log(response.data);
                console.log(response.data);
                setTips(response.data);
                setIsLoading(false);
            } catch (e) {
                console.log(
                    'Une erreur est survenue lors de la récupération des Tips'
                );
            }
        };
        handleTipListing();
    }, []);

    return (
        <>
            <h2>Liste de Tips</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
            fugiat velit dicta corrupti. Necessitatibus excepturi, voluptatem
            quaerat fugiat id culpa ratione obcaecati, aut ipsam, earum
            pariatur. Inventore labore quam dolore placeat laudantium? Ratione,
            aliquam. Optio, ullam! Quaerat eius ad iusto necessitatibus saepe
            pariatur, commodi cumque temporibus ipsum excepturi voluptas est
            officiis culpa voluptatem sunt. Necessitatibus harum eligendi quasi
            eveniet incidunt odit amet id natus. Dignissimos porro suscipit
            libero temporibus culpa similique, perspiciatis laudantium excepturi
            corrupti et minima adipisci, qui inventore ad odit architecto modi
            quis voluptas. At, aspernatur voluptate! Quas atque cumque quibusdam
            officia laudantium dolore sunt quaerat architecto nostrum, beatae
            voluptate sit ipsam, reiciendis fugiat laborum eaque ea provident
            doloribus commodi laboriosam reprehenderit tenetur? Accusamus
            adipisci animi quos harum praesentium laborum necessitatibus!
            Assumenda nostrum id nisi, consequatur debitis ratione at nemo
            itaque totam aspernatur distinctio temporibus iusto fugiat omnis
            laboriosam ex deserunt placeat consectetur natus! Ullam ipsum hic,
            consectetur nesciunt repellat perspiciatis voluptatibus similique
            nemo soluta doloribus consequuntur, recusandae aliquid praesentium
            quod quaerat laborum ut cumque, asperiores odit nulla impedit magnam
            aut dolorem id! Debitis corrupti ipsam maxime, quam exercitationem
            magnam dolores cupiditate iste nostrum distinctio excepturi non
            dolore ipsa voluptatibus porro, nesciunt neque commodi sed nulla
            ratione ducimus.
            {/* <ul className='tips-list'>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    tips.map((tip) => (
                        <li key={tip.id} id={tip.id}>
                            <Link className='tip-card' to={`/tips/${tip.id}`}>
                                <div key={tip.id} tip={tip} />
                            </Link>
                        </li>
                    ))
                )}
            </ul> */}
        </>
    );
};

export default Tips;
