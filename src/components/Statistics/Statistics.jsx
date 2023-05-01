import React from 'react';
import vector from '../../assets/all_images/Vector.png';
import './Statistics.css'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, Line } from 'recharts';



const Statistics = () => {

    const result = [
        {
            assignment: 'A1',
            mark: 60,
            fullMark: 60,
        },
        {
            assignment: 'A2',
            mark: 59,
            fullMark: 60,
        },
        {
            assignment: 'A3',
            mark: 59,
            fullMark: 60,
        },
        {
            assignment: 'A4',
            mark: 60,
            fullMark: 60,
        },
        {
            assignment: 'A5',
            mark: 60,
            fullMark: 60,
        },
        {
            assignment: 'A6',
            mark: 30,
            fullMark: 30,
        },
    ];

    return (
        <div>
            <div className='bg-img md:h-56'>
                <h2 className='font-bold text-3xl text-center py-14'>Statistics</h2>
            </div>
            <div>
                <RadarChart
                    width={1000}
                    height={500}
                    data={result}
                    className='m-auto'
                >
                    <PolarGrid />
                    <Tooltip />
                    <PolarAngleAxis dataKey="assignment" />
                    <PolarRadiusAxis />
                    <Radar name="Mark" dataKey="mark" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                </RadarChart>
                <p className='text-center text-[#474747] pb-6'>Fig: Rader Chart of assignment results received so far</p>
            </div>
        </div>
    );
};

export default Statistics;