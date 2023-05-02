import React, { useState } from 'react';
import Job from '../Job/Job';
import { useLoaderData } from 'react-router-dom';

const Jobs = () => {

    const savedJob = useLoaderData();
    // const [job, setJob] = useState(savedJob);
    // console.log(job);

    return (
        <div >
            <div className='bg-img md:h-56 flex justify-center items-center'>
                <h2 className='font-bold text-3xl text-center'>Applied Job</h2>
                </div>
                {
                    savedJob.map(job => <Job
                    key={job.id}
                    job={job}
                    ></Job>)
                }
        </div>
    );
};

export default Jobs;