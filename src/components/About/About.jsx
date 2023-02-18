import React from 'react';
import { Link } from 'react-router-dom';
import bg_about from '../../assects/images/about.webp'

const About = () => {
    return (
        <div>
            <div className="card rounded-none w-full bg-base-100 image-full">
                <figure><img className='rounded-none' src={bg_about} alt="Shoes" /></figure>
                <div className="card-body flex justify-center items-center">
                    <div className="">
                        <h2 className="text-5xl font-serif">About Us</h2>
                        <div className="text-sm breadcrumbs">
                            <ul>
                                <li>
                                    <Link to={'/home'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/about'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;