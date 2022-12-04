import { Box, Divider, Grid } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';


const HeaderComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container item xs={12} sx={{ display: 'flex', alignItems: 'center', pb: '0.625rem' }} >
        <img src='/images/user-tie.svg' alt="user svg" />
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'left', ml: '0.625rem' }} className="text-primary">
          My Advisor
        </Typography>
      </Grid>
      <Divider className="bg-primary" />
    </Box>
  );
}


export default HeaderComponent;
