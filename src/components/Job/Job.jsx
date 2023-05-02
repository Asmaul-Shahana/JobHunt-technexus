import React from 'react';
import frame4 from '../../assets/icons/Frame-4.png';
import frame from '../../assets/icons/Frame.png';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {

    const { id, jobTitle, logo, companyName, location, salaryRange, jobType } = job;

    return (
        <div className='border border-[#E8E8E8] rounded-lg p-4 flex items-center gap-7'>
            <div className='bg-[#F4F4F4] rounded-lg h-36 w-36 flex justify-center items-center'>
                <img style={{ objectFit: 'contain', height: '80px', width: '110px' }} src={logo} alt="" />
            </div>
            <div className='flex-grow'>
                <h2 className='font-bold text-2xl text-[#474747] pb-1'>{jobTitle}</h2>
                <h4 className='text-[#757575] font-medium text-lg pb-1'>{companyName}</h4>
                <div className='flex gap-3'>
                    <p className='active border-2 border-violet-200 rounded-md py-2 px-3'>{jobType[0]}</p>
                    <p className='active border-2 border-violet-200 rounded-md py-2 px-3'>{jobType[1]}</p>
                </div>
                <div className='flex gap-4 text-[#757575] pt-3 pb-4'>
                    <div className='flex'>
                        <img src={frame4} alt="" />
                        <p>{location}</p>
                    </div>
                    <div className='flex'>
                        <img src={frame} alt="" />
                        <p>{salaryRange}</p>
                    </div>
                </div>
            </div>
            <div>
                <Link to={`/job/${id}`}><button className='flex flex-start gap-3 text-white font-semibold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-3 rounded-lg'>View Details</button></Link>
            </div>
        </div>
    );
};

export default Job;