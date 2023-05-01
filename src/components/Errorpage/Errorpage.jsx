import React from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'


const Errorpage = () => {
    return (
        <div className='text-center py-6'>
            <ExclamationTriangleIcon class="h-1/3 w-1/3 m-auto  text-yellow-300" />
            <h2 className='text-4xl font-bold pb-2'>Error: 404</h2>
            <h3 className='text-3xl font-semibold'>Page Not Found</h3>
        </div>
    );
};

export default Errorpage;