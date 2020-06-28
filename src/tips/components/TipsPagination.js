import React from 'react';

// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import NativeSelect from '@material-ui/core/NativeSelect';

const TipsPagination = ({
    tipsPerPage,
    setTipsPerPage,
    totalTips,
    paginate,
    currentPage,
}) => {
    const pageNumbers = [];

    // const handleSelect = (event) => {
    //     setTipsPerPage(event.target.value);
    // };

    for (let i = 1; i <= Math.ceil(totalTips / tipsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            {/* <FormControl variant='outlined'>
                <NativeSelect
                    native
                    value={tipsPerPage}
                    onChange={handleSelect}
                    label='Age'
                    inputProps={{
                        name: 'Tips par Page',
                    }}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </NativeSelect>
                <FormHelperText>Tips par page</FormHelperText>
            </FormControl> */}
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
        </nav>
    );
};

export default TipsPagination;
