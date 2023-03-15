import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Title from '../Hooks/useTitle';
import { getUsers } from '../redux/slices/allUserSlice';
import { getData } from '../redux/slices/landingPageSlice';
import { loggedin } from '../redux/slices/loggedinUserSlice';
import Footer from '../Sheared/Footer/Footer';
import Header from '../Sheared/Header/Header';
import Loader from '../Sheared/Loader/Loader';

const Main = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const current = JSON.parse(localStorage.getItem('loggedin'))
        if (current) {
            dispatch(loggedin(current));
            dispatch(getData());
            dispatch(getUsers());
        }
    }, [dispatch]);

    const data = useSelector(state => state.home.data[0]);
    Title(data?.landingPageTitle);


    return (
        <>
            {
                data?.length !== 0 ?
                    <div className='min-h-screen flex flex-col justify-between'>
                        <div>
                            <div className='lg:mb-28 md:mb-24 mb-12'>
                                <Header />
                            </div>
                            <Outlet />
                        </div>
                        <div>
                            <Footer />
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

export default Main;