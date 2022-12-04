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
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={{ xs: 2, md: 4, width: '100%' }} >
        <Grid item xs={12} md={12} lg={12} sx={{ borderRadius: '0.625rem' }}>
          <Grid lg={12} sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: '0.625rem', paddingBottom: '0.25rem' }}>
            {[1, 2].map(() => {
              return (
                <>
                  <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem 2.25rem 1rem 2.25rem' }}>
                    <Grid>
                      <Grid sx={{ display: 'flex', alignItems: 'center' }} >
                        <Avatar sx={{ height: '3.125rem', width: '3.125rem' }} alt="Remy Sharp" src="/images/profileimage.svg" />
                        <Grid sx={{ display: 'flex', flexDirection: 'column', pl: '0.75rem' }}>
                          <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }} >
                              Kare Kertz
                            </Typography>
                            <Typography sx={{ pl: '0.688rem', fontSize: '0.625rem', fontWeight: '300' }} >(She, her)</Typography>
                          </Grid>
                          <Grid>
                            <CustomChip title={'Life Insurance'} className={'bg-green'} />
                            <CustomChip title={'Disability Advisor'} sx={{ color: '#fff', ml: '0.5rem' }} className={'bg-pink'} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid>
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
                    </Grid>
                  </Grid>
                  <Divider sx={{ borderBottom: '1px solid #FFE4EB', width: '92%', margin: 'auto' }} />
                </>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}


export default ProfileClientList;
