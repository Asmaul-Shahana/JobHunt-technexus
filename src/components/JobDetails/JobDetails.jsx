import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import jobData from '../../../public/jobs.json';
import frame4 from '../../assets/icons/Frame-4.png';
import frame from '../../assets/icons/Frame.png';
import calender from '../../assets/icons/Frame-1.png';
import frame2 from '../../assets/icons/Frame-2.png';
import frame3 from '../../assets/icons/Frame-3.png';
import { saveArrayToLocalStorage } from '../../utilities/fakedb';

const JobDetails = () => {
    const { id } = useParams();
    const job = jobData.find(job => job.id === parseInt(id));

    const { jobTitle, salaryRange, jobDescription, jobResponsibilities, experienceRequirements, educationalRequirements, location, phone, email } = job;
    // console.log(job);

    const [addJob, setAddJob] = useState([]);
    
    
    const handleApplyNow = (job) =>{
        let newJob = [];
        const exists = addJob.find(jb => jb.id === id)
        if(!exists)
        {
            newJob = [...addJob, job];
        }
        else{
            // const remaining = addJob.filter(jb => jb.id!== id);
            // newJob = [...remaining, exists];
            alert('exisits');
            return;
        }
        setAddJob(newJob);
        saveArrayToLocalStorage(newJob);
    }

    return (
        <div>
            <div className='bg-img md:h-56 flex justify-center items-center'>
                <h2 className='font-bold text-3xl text-center'>Job Details</h2>
            </div>
            <div className='px-28 pt-16 pb-6 grid grid-cols-3 gap-5 justify-center'>
                <div className='col-span-2'>
                    <p className='pb-3'><span className='font-bold'>Job detail: </span> <span className='text-[#757575]'>{jobDescription}</span></p>

                    <p className='pb-3'><span className='font-bold'>Job Resposibilities: </span> <span className='text-[#757575]'>{jobResponsibilities}</span></p>

                    <p className='font-bold pb-3'>Educational Requirements: </p>
                    <p className='text-[#757575] pb-3'>{educationalRequirements}</p>
                    <p className='font-bold pb-3'>Experiences:</p>
                    <p className='text-[#757575] pb-3'>{experienceRequirements}</p>
                </div>
                <div className='col-span-1'>
                    <div className='bg-[#9873FF1A] rounded-lg p-5'>
                        <h2 className='text-lg font-bold border-b-2 pb-2'>Job Details</h2>
                        <div className='flex gap-1 pt-3 pb-2'>
                            <img src={frame} alt="" />
                            <p><span className='text-[#474747] font-bold'>Salary: </span> <span className='text-[#757575]'>{salaryRange} (Per Month)</span></p>
                        </div>
                        <div className='flex gap-1'>
                            <img src={calender} alt="" />
                            <p><span className='text-[#474747] font-bold'>Job Title: </span> <span className='text-[#757575]'>{jobTitle}</span></p>
                        </div>
                        <h2 className='text-lg font-bold border-b-2 pt-5 pb-2'>Contact Information</h2>
                        <div className='flex gap-1 pt-3'>
                            <img src={frame2} alt="" />
                            <p><span className='text-[#474747] font-bold'>Phone: </span> <span className='text-[#757575]'>{phone}</span></p>
                        </div>
                        <div className='flex gap-1 pt-3'>
                            <img src={frame3} alt="" />
                            <p><span className='text-[#474747] font-bold'>Email: </span> <span className='text-[#757575]'>{email}</span></p>
                        </div>
                        <div className='flex gap-1 pt-3'>
                            <img src={frame4} alt="" />
                            <p><span className='text-[#474747] font-bold'>Address: </span> <span className='text-[#757575]'>{location}</span></p>
                        </div>
                    </div>
                    <div>
                        <button onClick={ () => {handleApplyNow(job)}} className='w-full gap-3 text-white font-semibold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-3 mt-4 rounded-lg'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;