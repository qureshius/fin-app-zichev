import { Box, Button, FormControl, Grid } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import CustomDropDown from '../../customDropDown/CustomDropDown';

const AdvisorsForm = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: '0.75rem' }}  >
            <Grid container spacing={{ xs: 2, md: 4, width: '100%' }}>
                <Grid item xs={12} md={12} lg={12}>
                    <Grid lg={12} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <Grid item xs={12} md={12} lg={12} sx={{ pt: '3.5rem' }}>
                            <Typography className="text-purple" sx={{ fontSize: '1.25rem', fontWeight: 'bold', textAlign: 'center' }}>
                                Find New Advisors
                            </Typography>
                            <Typography sx={{ fontSize: '0.75rem', fontWeight: '600', textAlign: 'center', pt: '1.25rem' }} >
                                We will find the right advisor for your needs based on the information you provide
                            </Typography>
                        </Grid>
                        <Grid lg={12}>
                            <FormControl fullWidth>
                                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ pt: '2.25rem' }}>
                                    <Grid item xs={1}></Grid>
                                    <CustomDropDown inputLabel={'Expert advisor in...'} label={"Expert advisor in..."} />
                                    <CustomDropDown inputLabel={'Why are you looking for a new advisor?'} label={"Why are you looking for a new advisor?"} />

                                </Grid>
                                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ pt: '1.813rem' }}>
                                    <Grid item xs={1}></Grid>
                                    <CustomDropDown inputLabel={'Estimate your total investable assets'} label={"Estimate your total investable assets"} />
                                    <CustomDropDown inputLabel={'Language'} label={"Language"} />
                                </Grid>
                                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ pt: '1.813rem' }}>
                                    <Grid item xs={1}></Grid>
                                    <CustomDropDown inputLabel={'Would you like your advisor to be'} label={"Would you like your advisor to be"} />
                                    <CustomDropDown inputLabel={'Connect with your advisor via'} label={"Connect with your advisor via"} />
                                </Grid>
                            </FormControl>
                            <Grid sx={{ pt: '1.75rem', pb: '3.313rem', display: 'flex', justifyContent: 'center' }}>
                                <Button className="bg-purple custom_button">Match Advisor</Button>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}


export default AdvisorsForm;
