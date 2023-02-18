import React from 'react';

const Experiencedjob = ({ experienceJob }) => {
    const { img, position_name, company_logo, company_name, job_location, job_nature, job_description, experienc } = experienceJob

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='hidden md:block h-80' src={company_logo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-serif">{position_name}</h2>
                    <h4 className='text-lg font-mono'>{company_name}</h4>
                    <p className='font-thin'>{job_description}</p>
                    <h4 className='text-lg font-serif'>Job Nature: {job_nature}</h4>
                    <h4 className='font-serif'>Experienced: <strong className='text-xl'>{experienc}</strong></h4>
                    <h4 className='text-lg font-thin'>{job_location}</h4>
                    <div className="card-actions justify-end">
                        <button className="btn">Apply Job</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiencedjob;