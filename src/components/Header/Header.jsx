import React, { useState } from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';


const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='backgroundcolor px-6 py-6 md:px-28 md:pt-12'>
            <div className='md:flex justify-between items-center'>
                <h2 className='font-bold text-2xl'>TechNexus</h2>
                <nav>
                    <div onClick={() => setOpen(!open)} className='md:hidden'>
                        <span>
                            {
                                open === true ? <XMarkIcon className="h-7 w-7 text-[#9873FF]" />
                                    : <Bars3Icon className="h-7 w-7 text-[#9873FF]" />
                            }
                        </span>
                    </div>
                    <div className={`flex gap-7 justify-between absolute md:static duration-500 ${open ? 'top-36' : '-top-96'} pl-6 x-2 y-2`}>
                        <ActiveLink to="/">Home</ActiveLink>
                        <ActiveLink to="/statistics">Statistics</ActiveLink>
                        <ActiveLink to="/jobs">Applied Jobs</ActiveLink>
                        <ActiveLink to="/blogs">Blog</ActiveLink>
                    </div>
                </nav>
                <button className='flex flex-start gap-3 text-white font-semibold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-3 rounded-lg'>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;