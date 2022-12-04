import { Grid, InputLabel, MenuItem, Select, FormControl } from '@mui/material';
import React from 'react';

const CustomDropDown = (props) => {
    return (
        <Grid item xs={5} >
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
        </Grid>
    );
}


export default CustomDropDown;

