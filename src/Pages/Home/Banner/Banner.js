import React from 'react';
import { useSelector } from 'react-redux';
import LoginAndRegister from '../LoginAndRegister/LoginAndRegister';
import './Banner.css';

const Banner = () => {

    const data = useSelector(state => state.home.data[0]);
    const currentUser = useSelector(state => state.loggedin.loggedinUser);
 
    return (
        <div className='banner lg:h-[918px] md:h-[917px] pt-[50px] lg:pb-[130px] md:pb-[130px] pb-[50px]'>
            <div className='max-w-7xl h-[100%] mx-auto lg:flex md:flex block justify-between items-center lg:px-0 md:px-5 px-2'>
                <div className='tow-btn lg:block md:block flex flex-col justify-center items-center'>
                    <div className='flex lg:text-3xl md:text-2xl text-xl font-semibold text-white'><h1 className='brand-bg px-3 lg:py-3 md:py-3 py-2  relative'>{data?.banner?.firstTitle?.firstPart}</h1><h1 className='red-bg lg:px-5 md:px-5 px-4 lg:py-3 md:py-3 py-2'>{data?.banner?.firstTitle?.secondPart}</h1></div>

                    <div className='flex lg:text-3xl md:text-2xl text-xl font-semibold text-white lg:mt-5 md:mt-5 mt-3'><h1 className='brand-bg px-3 lg:py-3 md:py-3 py-2 relative'>secure</h1><h1 className='red-bg lg:px-5 md:px-5 px-4 lg:py-3 md:py-3 py-2'>your peace of mind</h1></div>
                </div>
                <div className={`${currentUser?.email? 'hidden': 'block'}`}>
                    {

                        <LoginAndRegister />

                    }
                </div>
            </div>
        </div>
    );
};

export default Banner;