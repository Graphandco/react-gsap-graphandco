import React, { useContext } from 'react';
import { TipContext } from '../components/TipContext';

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
    const [tips] = useContext(TipContext);

    const phpTips = tips.filter((tip) => {
        return tip.acf.langage.includes('php');
    });
    const jsTips = tips.filter((tip) => {
        return tip.acf.langage.includes('javascript');
    });
    const cssTips = tips.filter((tip) => {
        return tip.acf.langage.includes('css');
    });
    const prestaTips = tips.filter((tip) => {
        return tip.acf.langage.includes('prestashop');
    });

    return (
        <div className='tips-search'>
            <TextField
                //label='Rechercher'
                InputProps={{
                    startAdornment: <SearchIcon position='start'></SearchIcon>,
                }}
                //variant='outlined'
                label='Rechercher un tip'
                size='small'
                className='tips-search-input'
                inputProps={{ 'aria-label': 'description' }}
                id='searchInput'
                type='text'
                onChange={props.searchHandle}
            />

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
                    <span className='tips-length'>({tips.length})</span>

                    <FormControlLabel
                        value='php'
                        control={<Radio />}
                        label='PHP'
                    />
                    <span className='tips-length'>({phpTips.length})</span>

                    <FormControlLabel
                        value='javascript'
                        control={<Radio />}
                        label='Javascript'
                    />
                    <span className='tips-length'>({jsTips.length})</span>

                    <FormControlLabel
                        value='css'
                        control={<Radio />}
                        label='CSS'
                    />
                    <span className='tips-length'>({cssTips.length})</span>

                    <FormControlLabel
                        value='prestashop'
                        control={<Radio />}
                        label='Prestashop'
                    />
                    <span className='tips-length'>({prestaTips.length})</span>
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default TipSearch;
