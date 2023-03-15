import React from 'react';
import { useSelector } from 'react-redux';
import footer1 from '../../assets/footer/footer1.png';
import footer2 from '../../assets/footer/footer2.png';
import footer3 from '../../assets/footer/footer3.png';
import footer4 from '../../assets/footer/footer4.png';
import footer5 from '../../assets/footer/footer5.png';

const Footer = () => {

    const data = useSelector(state => state.home.data[0]);

    return (
        <div>
            <div className='max-w-7xl mx-auto bg-gray-100 py-5 lg:px-28 md:px-14 mt-10'>
                <h1 className='text-center text-2xl font-semibold text-gray-600 capitalize'>{data?.footer?.title}</h1>
                <div className='grid lg:grid-cols-5 md:grid-cols-5 grid-cols-1 gap-x-5 lg:justify-between md:justify-between justify-center items-center px-6 my-8'>
                    <img className='h-[35px] lg:mx-0 md:mx-0 mx-auto' src={footer1} alt="footer-img" />
                    <img className='h-[35px] lg:mx-0 md:mx-0 mx-auto lg:mt-0 md:mt-0 mt-5' src={footer2} alt="footer-img" />
                    <img className='h-[35px] lg:mx-0 md:mx-0 mx-auto lg:mt-0 md:mt-0 mt-5' src={footer3} alt="footer-img" />
                    <img className='h-[35px] lg:mx-0 md:mx-0 mx-auto lg:mt-0 md:mt-0 mt-5' src={footer4} alt="footer-img" />
                    <img className='h-[35px] lg:mx-0 md:mx-0 mx-auto lg:mt-0 md:mt-0 mt-5' src={footer5} alt="footer-img" />
                </div>
                {/* footer images div  */}

                <div className='lg:flex md:flex gap-x-20 mt-10 lg:px-0 md:px-0 px-2'>
                    <div className='max-w-[400px]'>
                        <h2 className='font-bold capitalize'>{data?.footer?.aredoAbout?.title}</h2>
                        <p className='text-gray-800 first-letter:uppercase'>{data?.footer?.aredoAbout?.body}</p>
                    </div>
                    <div>
                        <ul className='text-gray-800 lg:mt-0 md:mt-0 mt-3'>
                            <li className='font-bold capitalize'>
                                <h1>{data?.footer?.contacts?.title}</h1>
                            </li>
                            <li>
                                {data?.footer?.contacts?.post}
                            </li>
                            <li>
                                {data?.footer?.contacts?.location}
                            </li>
                            <li>
                                {data?.footer?.contacts?.email}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;