import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import CustomChip from '../../customChip/CustomChip';
import Image from 'next/image'


const ProfileInfo = () => {
  return (
    <>
      <section>
        <div className='py-9 pr-9 pl-11 bg-white rounded-xl shadow-lg'>
          <div className='flex items-start'>
            <Image src="/images/profileimage.svg" className='h-20 w-20' alt="profile image" width={80} height={80} />
            <div className='pl-7'>
              <div className='flex items-center'>
                <h6 className='h6'>
                  Kare Kertz
                </h6>
                <p className='pl-3 font-xs font-light	'>(She, her)</p>
              </div>
              <div className='flex items-center'>
                <Image src='/images/map-pin.svg' alt="map location" className="img-fluid rounded-top" width={15} height={16} />
                <p className='ml-1 text-heading'>
                  Ontartio, Canada
                </p>
              </div>
              <p className='text-description'>
                Carleton University
              </p>
            </div>
          </div>

          <div className='pt-6 flex justify-evenly'>
            <div className='flex flex-col items-center justify-center'>
              <p className='text-heading' >
                5 +
              </p>
              <p className='text-heading' >
                Clients
              </p>
            </div>
            <div className='flex flex-col items-center justify-center'>

              <p className='text-heading'>
                120 +
              </p>
              <p className='text-heading'>
                Clients
              </p>

            </div>
            <div className='flex flex-col items-center justify-center'>
              <p className='text-heading' >
                8 years
              </p>
              <p className='text-heading' >
                Experience
              </p>
            </div>
          </div>

          <div className='pt-4'>
            <p className='text-sub-heading'>
              About me:
            </p>
            <p className='text-description pt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellus dignissim sodales feugiat. Orci est congue lacus mi lacus ut cras amet elementum. Sit odio aliquam nisl, sed. Eu, feugiat aliquet interdum sagittis, consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim tellus dignissim sodales feugiat. Orci est congue lacus mi lacus ut cras amet elementum. Sit odio aliquam nisl, sed. Eu, feugiat aliquet interdum sagittis, consequat.
            </p>
          </div>

          <div className='pt-4'>
            <p className='text-sub-heading'>
              Industry Experience
            </p>
            <p className='text-description pt-2'>
              CFP   RICP   EA
            </p>
          </div>

          <div>
            <p className='text-sub-heading pt-4 pb-2'>
              Specialties
            </p>
            <CustomChip title={'Life Insurance'} className={'bg-green'} />
            <CustomChip title={'Disability Advisor'} sx={{ color: '#fff', ml: '0.5rem' }} className={'bg-pink'} />
          </div>

          <div className='pt-4'>
            <p className='text-sub-heading py-2'>
              Languages
            </p>
            <CustomChip title={"English"} className={'bg-piggy-pink leading-3	'} />
            <CustomChip title={"French"} className={'bg-piggy-pink ml-2 leading-3'} />
            <CustomChip title={"Latin"} className={'bg-piggy-pink ml-2 leading-3'} />
          </div>
          <div className='flex justify-center pt-7'>
            <Button className="bg-primary custom_button">Send Message</Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfileInfo;
