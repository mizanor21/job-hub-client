import React, { useEffect, useState } from 'react';
import TopITCompany from './TopITCompany';

const TopITCompanies = () => {
    const [topITCompanies, setTopITCompanies] = useState([])
    useEffect(() => {
        fetch('https://job-hub-server-mizanor21.vercel.app/top-it-companies')
            .then(res => res.json())
            .then(data => setTopITCompanies(data))
    }, [])

    return (
        <div className="mx-5">
            <div className='container mx-auto my-10'>
                <h1 className='text-2xl md:text-4xl font-thin my-5 md:my-10'>Top IT Companies</h1>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        topITCompanies.map(topITCompany => <TopITCompany key={topITCompany._id} topITCompany={topITCompany}></TopITCompany>)
                    }
                </div>
                <div className="text-center mt-10">
                    <button className="btn btn-outline font-serif">SEE ALL</button>
                </div>
            </div>
        </div>
    );
};

export default TopITCompanies;