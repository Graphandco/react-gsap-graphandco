import React from 'react';

const TipsPagination = ({ tipsPerPage, totalTips, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalTips / tipsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className={
                            number === currentPage ? 'page active' : 'page'
                        }
                        onClick={() => paginate(number)}
                    >
                        {number}
                        {console.log(number)}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TipsPagination;
