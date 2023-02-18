import React from 'react';

const FresherJob = ({ fresherJob }) => {
    const { img, position_name, company_name, job_location, job_nature, job_description } = fresherJob
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-96 h-56 rounded-xl' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-serif">{position_name}</h2>
                    <h4 className='text-lg font-mono'>{company_name}</h4>
                    <p className='font-thin'>{job_description}</p>
                    <h4 className='text-lg font-serif'>Job Nature: {job_nature}</h4>
                    <h4 className='text-lg font-thin'>{job_location}</h4>
                    <div className="card-actions justify-end">
                        <button className="btn">Apply Job</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FresherJob;