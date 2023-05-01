import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import jobData from '../../../public/jobs.json';

const JobDetails = () => {
    const { id } = useParams();
    const job = jobData.find(job => job.id === parseInt(id));

    const { jobDescription, jobResponsibilities, experienceRequirements, educationalRequirements } = job;
    console.log(job);

    return (
        <div>
            <div className='bg-img md:h-56 flex justify-center items-center'>
                <h2 className='font-bold text-3xl text-center'>Job Details</h2>
            </div>
            <div  className='px-28 pt-16'>
                <div>
                    <p className='pb-3'><span className='font-bold'>Job detail: </span> <span className='text-[#757575]'>{jobDescription}</span></p>

                    <p className='pb-3'><span className='font-bold'>Job Resposibilities: </span> <span className='text-[#757575]'>{jobResponsibilities}</span></p>

                    <p className='font-bold pb-3'>Educational Requirements: </p>
                    <p className='text-[#757575] pb-3'>{educationalRequirements}</p>
                    <p className='font-bold pb-3'>Experiences:</p>
                    <p className='text-[#757575] pb-3'>{experienceRequirements}</p>
                </div>
                <div>
                    <h2>Job Details</h2>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;