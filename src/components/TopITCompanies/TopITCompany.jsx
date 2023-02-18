import React from 'react';

const TopITCompany = ({ topITCompany }) => {
    const { company_name, available_position, img } = topITCompany
    return (
        <div>
            <div className="card glass">
                <figure><img className='w-[500px] h-60' src={img} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-serif">{company_name}</h2>
                    <p className='font-thin'>One of the most popular IT company in Bangladesh.</p>
                    <div className="flex items-center">
                        <h3 className='border-2 px-7 py-2 font-serif text-lg mr-5'>{available_position}</h3>
                        <h4 className='text-xl font-thin'>Available Position</h4>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn font-serif">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopITCompany;