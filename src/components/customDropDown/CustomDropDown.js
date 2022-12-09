import { Grid, InputLabel, MenuItem, Select, FormControl } from '@mui/material';
import React from 'react';

const CustomDropDown = (props) => {
    return (
        <div className='grid gridl-cols-9 px-6'>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{props?.inputLabel}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label={props?.label}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}


export default CustomDropDown;

