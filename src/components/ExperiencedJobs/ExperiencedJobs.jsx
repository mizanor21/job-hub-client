import React, { useEffect, useState } from 'react';
import Experiencedjob from './Experiencedjob';

const ExperiencedJobs = () => {
    const [experienceJobs, setExperienceJobs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/experience-jobs')
            .then(res => res.json())
            .then(data => setExperienceJobs(data))
    }, [])
    return (
        <div className="mx-5">
            <div className='container mx-auto my-10 md:my-20'>
                <h1 className='text-2xl md:text-4xl font-thin my-3 md:my-10'>Experienced Jobs</h1>
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                        experienceJobs.map(experienceJob => <Experiencedjob key={experienceJob._id} experienceJob={experienceJob}></Experiencedjob>)
                    }
                </div>
                <div className="text-center mt-10">
                    <button className="btn btn-outline font-serif">SEE ALL JOBS</button>
                </div>
            </div>
        </div>
    );
};

export default ExperiencedJobs;