import React, { useState } from 'react';
import Job from '../Job/Job';
import { useLoaderData } from 'react-router-dom';

const Jobs = () => {

    const savedJob = useLoaderData();

    const [filter, setFilter] = useState('all');

    const filteredJobs = savedJob.filter(job => {
        if (filter === 'all') {
            return true;
        } else {
            return job.jobType.includes(filter);
        }
    });

    const handleFilterOption = e => {
        setFilter(e.target.value);
    };

    return (
        <div >
            <div className='bg-img md:h-56 flex justify-center items-center'>
                <h2 className='font-bold text-3xl text-center'>Applied Job</h2>
            </div>
            <div className='flex flex-col gap-4 px-28 pt-24 pb-6'>
                <div className='ml-auto flex'>
                    <select className='flex items-center bg-[#F4F4F4] px-4 py-2 rounded-lg font-semibold text-lg text-[#474747]' name='filter' value={filter} onChange={handleFilterOption}>
                        <option value='all'>Fliter</option>
                        <option value='Remote'>Remote</option>
                        <option value='Onsite'>Onsite</option>
                    </select>
                </div>

                {filteredJobs.map(job => <Job
                    key={job.id}
                    job={job}
                ></Job>)}
            </div>
        </div>
    );
};

export default Jobs;