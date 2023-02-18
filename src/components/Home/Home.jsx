import React from 'react';
import ExperiencedJobs from '../ExperiencedJobs/ExperiencedJobs';
import FresherJobs from '../FresherJobs/FresherJobs';
import TopITCompanies from '../TopITCompanies/TopITCompanies';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <FresherJobs></FresherJobs>
            <ExperiencedJobs></ExperiencedJobs>
            <TopITCompanies></TopITCompanies>
        </div>
    );
};

export default Home;