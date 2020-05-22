import React from 'react';

import {
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

const TipSearch = (props) => {
    return (
        <>
            <TextField
                label='Rechercher'
                InputProps={{
                    startAdornment: <SearchIcon position='start'></SearchIcon>,
                }}
                //variant='outlined'
                size='small'
                className='search-input'
                inputProps={{ 'aria-label': 'description' }}
                id='searchInput'
                type='text'
                onChange={props.searchHandle}
            />
            <FormControl component='fieldset'>
                <FormLabel component='legend'>Langage</FormLabel>
                <RadioGroup
                    aria-label='langage'
                    name='langage'
                    value={props.radioValue}
                    onChange={props.filterHandle}
                >
                    <FormControlLabel
                        value=''
                        control={<Radio />}
                        label='Tous'
                    />
                    <FormControlLabel
                        value='php'
                        control={<Radio />}
                        label='PHP'
                    />
                    <FormControlLabel
                        value='javascript'
                        control={<Radio />}
                        label='Javascript'
                    />

                    <FormControlLabel
                        value='css'
                        control={<Radio />}
                        label='CSS'
                    />
                    {/* <FormControlLabel
                                value='disabled'
                                disabled
                                control={<Radio />}
                                label='(Disabled option)'
                            /> */}
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default TipSearch;
