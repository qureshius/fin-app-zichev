import { Box, Button, FormControl, Grid } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import CustomDropDown from '../../customDropDown/CustomDropDown';

const AdvisorsForm = () => {
    return (

        <>
            <section className='mt-3	'>
                <div className='flex flex-col w-full bg-white rounded-xl'>
                    <div className=''>
                        <h1 className="text-purple h4 font-bold text-center pt-12">
                            Find New Advisors
                        </h1>
                        <p className='text-sub-heading pt-5 text-center'>
                            We will find the right advisor for your needs based on the information you provide
                        </p>
                    </div>
                    <div>
                        <FormControl fullWidth>
                            <Grid className="grid lg:grid-cols-2 md:grid-cols-2 pt-7">
                                <CustomDropDown inputLabel={'Expert advisor in...'} label={"Expert advisor in..."} />
                                <CustomDropDown inputLabel={'Why are you looking for a new advisor?'} label={"Why are you looking for a new advisor?"} />
                            </Grid>
                            <div className="grid lg:grid-cols-2 md:grid-cols-2 pt-7">
                                <CustomDropDown inputLabel={'Estimate your total investable assets'} label={"Estimate your total investable assets"} />
                                <CustomDropDown inputLabel={'Language'} label={"Language"} />
                            </div>
                            <div className="grid lg:grid-cols-2 md:grid-cols-2 pt-7">
                                <CustomDropDown inputLabel={'Would you like your advisor to be'} label={"Would you like your advisor to be"} />
                                <CustomDropDown inputLabel={'Connect with your advisor via'} label={"Connect with your advisor via"} />
                            </div>
                        </FormControl>
                        <div className='pt-6 pb-12 flex justify-center'>
                            <Button className="bg-purple custom_button">Match Advisor</Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default AdvisorsForm;
