import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const Featured = () => {
    const featuredJobs = useLoaderData();
    // console.log(featuredJobs);
    return (
        <div className='px-6 py-6 md:px-28 md:pt-24'>
            <h3 className='font-bold text-4xl pb-3 text-center'>Featured Jobs</h3>
            <p className='text-[#757575] pb-6 text-center'>Choose from thousands of world class jobs with high salary and rewards.</p>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    featuredJobs.map(featuredJob => <FeaturedJob
                    key={featuredJob.id}
                    featuredJob={featuredJob}
                    ></FeaturedJob>)
                }
            </div>
        </div>
    );
};

export default Featured;