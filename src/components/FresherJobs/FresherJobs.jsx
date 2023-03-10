import React, { useEffect, useState } from 'react';
import FresherJob from './FresherJob';

const FresherJobs = () => {
    const [fresherJobs, setFresherJobs] = useState([])

    useEffect(() => {
        fetch('https://job-hub-server-mizanor21.vercel.app/fresher-jobs')
            .then(res => res.json())
            .then(data => setFresherJobs(data))
    }, [])
    // console.log(fresherJobs)
    return (
        <div className="mx-5">
            <div className='container mx-auto my-10'>
                <h1 className='text-2xl md:text-4xl font-thin my-5 md:my-10'>Fresher Jobs</h1>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        fresherJobs.map(fresherJob => <FresherJob key={fresherJob._id} fresherJob={fresherJob}></FresherJob>)
                    }
                </div>
                <div className="text-center mt-10">
                    <button className="btn btn-outline font-serif">SEE ALL JOBS</button>
                </div>
            </div>
        </div>
    );
};

export default FresherJobs;