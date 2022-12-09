import { Chip } from '@mui/material';
import React from 'react';

const CustomChip = (props) => {
    return (
        <Chip label={props?.title} 
        sx={{ fontSize: '0.5rem', fontWeight: '400', px: '0.625rem', 
        py: '0.25rem', height: 'unset', lineHeight: '0.875rem', 
        color: '#07000B', ...props.sx }} 
        className={props?.className} />
    );
}


export default CustomChip;

