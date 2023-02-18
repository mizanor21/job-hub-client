import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email*</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password*</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label w-20">
                                    <button className="m-0 p-0 btn btn-active btn-link hover:text-red-600">Forgot password?</button>
                                </label>
                            </div>
                            <div className="form-control mb-5">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <hr />
                            <p>Or following use method</p>
                            <div className=" flex justify-center items-center relative ">
                                <button className='btn'>Google</button>
                            </div>
                            <p>New user? <Link className='btn btn-link' to={'/signup'}>Signup</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;