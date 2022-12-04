import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import CustomChip from '../../customChip/CustomChip';


const ProfileInfo = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container sx={{ py: '2.1rem', pr: '2.125rem', pl: '2.75rem', backgroundColor: '#fff', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' , borderRadius: '0.625rem' }}>
        <Grid item xs={12} md={12} lg={12}>
          <Grid sx={{ display: 'flex', alignItems: 'start' }}>
            <img src="/images/profileimage.svg" sx={{ height: '5rem', width: '5rem' }} alt="profile image" />
            <Grid sx={{ pl: '1.75rem' }}>
              <Grid sx={{ display: 'flex', alignItems: 'center' }} >
                <Typography variant="body1" sx={{ fontWeight: 'bold', lineHeight: '1.688rem' }} >
                  Kare Kertz
                </Typography>
                <Typography sx={{ pl: '0.688rem', fontSize: '0.625rem', fontWeight: '300' }} >(She, her)</Typography>
              </Grid>
              <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                <img src='/images/map-pin.svg' alt="map location" class="img-fluid rounded-top" />
                <Typography sx={{ display: 'flex', alignItems: 'center', ml: '0.25rem', lineHeight: '1.313rem' }} >
                  Ontartio, Canada
                </Typography>
              </Grid>
              <Typography sx={{ fontSize: '0.75rem', fontWeight: '400', lineHeight: '1.313rem' }}>
                Carleton University
              </Typography>
            </Grid>
          </Grid>

          <Grid sx={{ pt: '1.5rem', display: 'flex', justifyContent: 'space-evenly' }}  >
            <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'  }}>
              <Typography >
                5 +
              </Typography>
              <Typography >
                Clients
              </Typography>
            </Grid>
            <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'  }}>
              
                <Typography >
                  120 +
                </Typography>
                <Typography >
                  Clients
                </Typography>
         
            </Grid>
            <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'  }}>
              <Typography >
                8 years
              </Typography>
              <Typography >
                Experience
              </Typography>
            </Grid>
          </Grid>


          <Grid sx={{ pt: '1.5rem' }}>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: '800', lineHeight: '1.313rem' }}>
              About me:
            </Typography>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: '400', pt: '0.5rem', lineHeight: '1.313rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellus dignissim sodales feugiat. Orci est congue lacus mi lacus ut cras amet elementum. Sit odio aliquam nisl, sed. Eu, feugiat aliquet interdum sagittis, consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellus dignissim sodales feugiat. Orci est congue lacus mi lacus ut cras amet elementum. Sit odio aliquam nisl, sed. Eu, feugiat aliquet interdum sagittis, consequat.
            </Typography>
          </Grid>

          <Grid sx={{ pt: '0.5rem' }}>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: '800', lineHeight: '1.313rem' }}>
              Industry Experience
            </Typography>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: '400', pt: '0.5rem', lineHeight: '1.313rem' }}>
              CFP   RICP   EA
            </Typography>
          </Grid>

          <Grid>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: '700', py: '0.5rem', lineHeight: '1.313rem' }} >
              Specialties
            </Typography>
            <CustomChip title={'Life Insurance'} className={'bg-green'}/>
            <CustomChip title={'Disability Advisor'} sx = {{color: '#fff', ml: '0.5rem'}} className={'bg-pink'} />
          </Grid>

          <Grid>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: '700', py: '0.5rem', lineHeight: '1.313rem' }}>
              Languages
            </Typography>
            <CustomChip title={"English"} className={'bg-piggy-pink'} sx={{lineHeight: '0.938rem'}}/>
            <CustomChip title={"French"} className={'bg-piggy-pink'} sx={{ml: '0.5rem', lineHeight: '0.938rem'}}/>
            <CustomChip title={"Latin"} className={'bg-piggy-pink'} sx={{ml: '0.5rem', lineHeight: '0.938rem'}}/>
          </Grid>

          <Grid sx={{ pt: '1.75rem', display: 'flex', justifyContent: 'center' }}>
            <Button className="bg-primary custom_button">Send Message</Button>
          </Grid>

        </Grid>
      </Grid>
    </Box>
  );
}


export default ProfileInfo;
