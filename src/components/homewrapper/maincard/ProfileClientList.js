import { Avatar, Box, Button, Chip, Divider, Grid, IconButton, Menu, Typography } from '@mui/material';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import CustomChip from '../../customChip/CustomChip';

const options = [
  'Remove Advisor',

];

const ProfileClientList = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section>
      <div className='w-full rounded-xl bg-white pb-1'>
            {[1, 2].map(() => {
              return (
                <>
                  <div className='flex items-center justify-between px-9 pt-9 pb-4'>

                      <div className='flex items-center'>
                        <Avatar className='h-12 w-15' alt="Remy Sharp" src="/images/profileimage.svg" />
                        <div className='flex flex-col pl-3'>
                          <div className='flex items-center'>
                            <p className='h6'>
                              Kare Kertz
                            </p>
                            <p className='pl-2 text-xs font-light	' sx={{ pl: '0.688rem', fontSize: '0.625rem', fontWeight: '300' }} >(She, her)</p>
                          </div>
                          <div>
                            <CustomChip title={'Life Insurance'} className={'bg-green'} />
                            <CustomChip title={'Disability Advisor'} sx={{ color: '#fff', ml: '0.5rem' }} className={'bg-pink'} />
                          </div>
                        </div>
                      </div>
                    <div>
                      <Button className="bg-primary custom_button_sm" sx={{ fontSize: '0.75rem', }}>View Profile</Button>
                      <IconButton onClick={handleClick}>
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                      >
                        {options.map((option) => (
                          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </div>
                  </div>
                  <Divider className='custom-bottom-border'/>
                </>
              )
            })}
      </div>
    </section>
  );
}


export default ProfileClientList;
