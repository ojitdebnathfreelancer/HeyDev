import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../Sheared/Loader/Loader';

const UserDetails = () => {

    const id = JSON.parse(localStorage.getItem('userId'));
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id])

    return (
        <>
            {
                user && id ?
                    <div>
                        <div className='max-w-7xl mx-auto flex justify-center items-center lg:mt-40 md:mt-14 lg:px-0 md:px-2'>
                            <div className=" p-3 lg:flex md:flex bg-base-100 shadow-xl">
                                <div>
                                    <img className='lg:w-[250px] md:w-[250px] w-full rounded-md' src="https://aiachicago.org/wp-content/uploads/2023/01/20171206_01-scaled.jpg" alt="user" />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">Name: {user?.name}</h2>
                                    <p className='flex-grow-0'><span className='font-semibold'>Email:</span> {user?.email}</p>
                                    <p><span className='font-semibold'>Phone:</span> {user?.phone?.split(' ')[0]}</p>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">Website: {user?.website}</h2>
                                    <p className='flex-grow-0'><span className='font-semibold'>Company:</span> {user?.company?.name}</p>
                                    <p><span className='font-semibold'>Catch Phrase:</span> {user?.company?.catchPhrase}</p>
                                    <div className="card-actions justify-end">
                                        <Link to="/users" className="brand-bg text-white font-semibold px-5 py-2 rounded-sm">
                                            Back
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='h-screen justify-center items-center'>
                        <Loader />
                    </div>
            }
        </>
    );
};

export default UserDetails;