import React from 'react';

const Job = ({job}) => {

    const { id, jobTitle, salaryRange, jobDescription, jobResponsibilities, experienceRequirements, educationalRequirements, location, phone, email } = job;

    return (
        <div>
            <h3>{jobTitle}</h3>
        </div>
    );
};

export default Job;