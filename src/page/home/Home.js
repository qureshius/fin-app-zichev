import { Box, Grid } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import HomeWrapper from '../../components/homewrapper/HomeWrapper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Home = () => {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={{ xs: 2, md: 4 }}>
                <Grid item xs={12} md={4} lg={3}>
                    <Item>xs=3</Item>
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                    <HomeWrapper/>
                </Grid>
            </Grid>
      </Box>
    );
}


export default Home;
