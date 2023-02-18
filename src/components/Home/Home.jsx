import React from 'react';
import ExperiencedJobs from '../ExperiencedJobs/ExperiencedJobs';
import FresherJobs from '../FresherJobs/FresherJobs';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <FresherJobs></FresherJobs>
            <ExperiencedJobs></ExperiencedJobs>
        </div>
    );
};

export default Home;