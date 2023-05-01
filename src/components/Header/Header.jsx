import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
       <div className='backgroundcolor px-28 pt-12'>
         <div className='flex justify-between items-center'>
            <h2 className='font-bold text-2xl'>TechNexus</h2>
            <div className='flex gap-6'>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/statistics">Statistics</ActiveLink>
                <ActiveLink to="/jobs">Applied Jobs</ActiveLink>
                <ActiveLink to="/blogs">Blog</ActiveLink>
            </div>
            <button className='flex flex-start gap-3 text-white font-semibold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-3 rounded-lg
'>Start Applying</button>
        </div>
       </div>
    );
};

export default Header;