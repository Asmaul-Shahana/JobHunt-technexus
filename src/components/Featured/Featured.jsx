import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const Featured = () => {
    const featuredJobs = useLoaderData();

    // console.log(featuredJobs);
    const [numFeaturedJobs, setNumFeaturedJobs] = useState(4);

    const featuredJobList = featuredJobs.slice(0, numFeaturedJobs); 

    const handleShowAll = () => {
        setNumFeaturedJobs(featuredJobs.length);
    };

    return (
        <div className='px-6 py-6 md:px-28 md:pt-24'>
            <h3 className='font-bold text-4xl pb-3 text-center'>Featured Jobs</h3>
            <p className='text-[#757575] pb-6 text-center'>Choose from thousands of world class jobs with high salary and rewards.</p>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    featuredJobList.map(featuredJob => (
                        <FeaturedJob key={featuredJob.id} featuredJob={featuredJob} />
                    ))
                }
            </div>
            {numFeaturedJobs < featuredJobs.length && (
                <button className=" font-semibold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white px-4 py-3 rounded-lg mt-4 mx-auto block" onClick={handleShowAll}>See All Jobs</button>
            )}
        </div>
    );
};


export default Featured;