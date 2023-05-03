import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const featuredJobs = useLoaderData();
    // console.log(featuredJobs);
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Featured
            featuredJobs={featuredJobs}></Featured>
        </div>
    );
};

export default Home;