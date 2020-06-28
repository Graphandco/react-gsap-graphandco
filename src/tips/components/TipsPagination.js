import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const TipsPagination = ({
    tipsPerPage,
    setTipsPerPage,
    totalTips,
    paginate,
    currentPage,
    tipsCurrentLength,
}) => {
    const pageNumbers = [];

    const handleSelect = (event) => {
        setTipsPerPage(event.target.value);
    };

    for (let i = 1; i <= Math.ceil(totalTips / tipsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <FormControl>
                <InputLabel>Tips par Page</InputLabel>
                <Select onChange={handleSelect} value={tipsPerPage}>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                </Select>
            </FormControl>

            {tipsCurrentLength > tipsPerPage && (
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
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default TipsPagination;
