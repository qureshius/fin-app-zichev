import { Box, Divider, Grid } from '@mui/material';
import React from 'react';
import Image from 'next/image'
import Typography from '@mui/material/Typography';


const HeaderComponent = () => {
  return (
    <>
      <section className='flex items-center pb-2'>
        <img src='/images/user-tie.svg' alt="user svg"></img>
        <h1 className='h2 text-primary pl-2'>My Advisor</h1>
      </section>
      <Divider className="bg-primary" />
    </>
  );
}


export default HeaderComponent;
