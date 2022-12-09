import React from 'react';
import HeaderComponent from './headercomponent/HeaderComponent';
import MainCard from './maincard/MainCard';

const HomeWrapper = () => {
    return (
       <div className='bg-gray'>
            <div className='pt-8 pr-16 pb-16 pl-20'>
                <HeaderComponent />
                <MainCard />
            </div>
       </div>
    );
}

export default HomeWrapper;
