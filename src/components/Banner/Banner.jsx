import React from 'react';
import banner from '../../assets/all_images/banner.png';

const Banner = () => {
    return (
        <div className='backgroundcolor px-6 py-6 md:px-28 md:pt-6 md:flex justify-between items-center gap-8'>
                <div className='md:w-1/2'>
                    <h1 className='font-bold text-6xl pb-5'>One Step Closer To Your <span className='active'>Dream Job</span></h1>
                    <p className='text-[#757575] pb-5'>From thousands of renowned tech companies, grab your dream job opportunity today. We provide all the information you need. You work hard. We work to manage all your job applications.</p>
                    <button className='flex flex-start gap-3 text-white font-semibold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-3 rounded-lg'>Get started</button>
                </div>
                <div className='md:w-1/2'>
                    <img src={banner} alt="banner-img" />
                </div>
            </div>
    );
};

export default Banner;