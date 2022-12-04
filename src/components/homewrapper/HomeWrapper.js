import { Grid } from '@mui/material';
import React from 'react';
import HeaderComponent from './headercomponent/HeaderComponent';
import MainCard from './maincard/MainCard';
import './maincard/homewrapper.css';

const HomeWrapper = () => {
    return (
       <div className='bg-gray'>
            <Grid className='content_wrapper'>
                <HeaderComponent />
                <MainCard />
            </Grid>
       </div>
    );
}

export default HomeWrapper;
