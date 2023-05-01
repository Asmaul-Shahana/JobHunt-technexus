import React from 'react';

const CategoryCard = ({ category }) => {
    const { id, title, logo, job_count } = category;
    return (
        <div className='rounded-lg pb-7 px-7 pt-9' style={{background: 'linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)'}}>
            <div className='p-2 rounded-lg bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] h-12 w-12'>
                <img src={logo} alt="" />
            </div>
            <h2 className='font-bold text-xl pt-5 text-[#474747]'>{title}</h2>
            <p className='text-[#A3A3A3] text-base pt-2'>{job_count}</p>
        </div>
    );
};

export default CategoryCard;