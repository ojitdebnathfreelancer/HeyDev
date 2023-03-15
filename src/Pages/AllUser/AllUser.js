import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../../Sheared/Loader/Loader';

const AllUser = () => {

    const users = useSelector(state => state.user?.users);
    const setId = (id) => {
        localStorage.setItem('userId', JSON.stringify(id));
    };
    // user id set in local store 

    return (
        <>
            {
                users.length !== 0 ?
                    <div>
                        <div className='max-w-7xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 lg:mt-5 md:mt-5 mt-3 lg:px-0 md:px-2 px-2'>
                            {
                                users.map(user => <div key={user?.id} className="card bg-base-100 shadow-xl">
                                    <img className='w-full' src="https://aiachicago.org/wp-content/uploads/2023/01/20171206_01-scaled.jpg" alt="user" />
                                    <div className="card-body">
                                        <h2 className="card-title">Name: {user?.name}</h2>
                                        <p><span className='font-semibold'>Email:</span> {user?.email}</p>
                                        <p><span className='font-semibold'>Phone:</span> {user?.phone.split(' ')[0]}</p>
                                        <div className="card-actions justify-end">
                                            <button onClick={() => setId(user?.id)}>
                                                <Link to='/user' className="brand-bg text-white font-semibold px-5 py-2 rounded-sm">
                                                    Details
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                    :
                    <Loader />
            }
        </>
    );
};

export default AllUser;