import React from 'react';

import {
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    //FormLabel,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

const TipSearch = (props) => {
    return (
        <div className='tips-search'>
            <TextField
                //label='Rechercher'
                InputProps={{
                    startAdornment: <SearchIcon position='start'></SearchIcon>,
                }}
                //variant='outlined'
                size='small'
                className='tips-search-input'
                inputProps={{ 'aria-label': 'description' }}
                id='searchInput'
                type='text'
                onChange={props.searchHandle}
            />

            {/* <FormControl className='tips-search-radio'>
                <InputLabel>Trier</InputLabel>
                <Select
                    MenuProps={{
                        disableScrollLock: true,
                    }}
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value=''
                    onChange={props.filterHandle}
                >
                    <MenuItem value={''}>Tous</MenuItem>
                    <MenuItem value={'javascript'} input={'Javascript'}>
                        Javascript
                    </MenuItem>
                    <MenuItem value={'php'}>PHP</MenuItem>
                    <MenuItem value={'css'}>CSS</MenuItem>
                    <MenuItem value={'prestashop'}>Prestashop</MenuItem>
                </Select>
            </FormControl> */}
            <FormControl component='fieldset' className='tips-search-radio'>
                <RadioGroup
                    row
                    aria-label='langage'
                    name='langage'
                    value={props.radioValue}
                    onChange={props.filterHandle}
                >
                    <FormControlLabel
                        value=''
                        control={<Radio />}
                        label='Tous'
                        size='small'
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
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default TipSearch;
