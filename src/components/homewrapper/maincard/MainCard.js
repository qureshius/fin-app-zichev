import { Box, Grid } from '@mui/material';
import React from 'react';
import ProfileInfo from './ProfileInfo';
import ProfileClientList from './ProfileClientList';
import AdvisorsForm from './AdvisorsForm';


const MainCard = () => {
    return (
        <Box sx={{ flexGrow: 1 , pt:'1.5rem'}} >
            <Grid container spacing={{ xs: 2, md: 4 }}>
                <Grid item xs={12} md={4} lg={4} >
                    <ProfileInfo  />
                </Grid>
                <Grid item xs={12} md={8} lg={8}>
                    <ProfileClientList />
                    <AdvisorsForm />
                </Grid>
            </Grid>
      </Box>
    );
}


export default MainCard;
