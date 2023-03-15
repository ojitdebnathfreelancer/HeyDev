import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { VscThreeBars } from 'react-icons/vsc';
import mainLogo from '../../assets/logo/main-logo.png';
import { logout } from '../../redux/slices/loggedinUserSlice';

const Header = () => {
    const loggedin = useSelector(state => state.loggedin?.loggedinUser);

    const [menu, setMenu] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogout = () => {
        dispatch(logout());
        localStorage.setItem('loggedin', JSON.stringify({}));
        navigate('/')
    };
    // user log out 

    return (
        <div className='fixed w-full z-[999] bg-white'>
            <div className='max-w-7xl mx-auto flex justify-between items-center py-2 lg:px-0 md:px-2 px-2'>
                <div>
                    <Link to='/'>
                        <img className='lg:h-[70px] md:h-[60px] h-[30px]' src={mainLogo} alt="main logo" />
                    </Link>
                </div>
                <div className='lg:block md:block hidden'>
                    <Link to='/users' className='mr-5 font-semibold lg:text-[20px] md:text-[20px]'>All Users</Link>
                    {
                        loggedin?.email &&
                        <>
                            <span className='mr-5 font-semibold lg:text-[20px] md:text-[20px]'>{loggedin?.firstName + ' ' + loggedin?.lastName}</span>
                            <button onClick={() => userLogout()} className='brand-bg text-white lg:px-3 md:px-3 px-2 lg:py-2 md:py-2 py-1 font-semibold capitalize rounded-sm'>Logout</button>
                        </>
                    }
                </div>
                <div className='relative lg:hidden md:hidden block'>
                    <VscThreeBars onClick={() => setMenu(!menu)} size={25} />
                    <ul className={`absolute w-[150px] top-[100%] lg:left-0 md:left-[-128px] left-[-128px] z-[9999] ${menu ? 'block' : 'hidden'}`}>
                        <li className='text-right font-semibold'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='text-right font-semibold'>
                            <Link to="/users">All User</Link>
                        </li>

                        {
                            loggedin?.email &&
                            <>
                                <li className='text-right font-semibold'>{loggedin?.firstName + ' ' + loggedin?.lastName}</li>
                                <li className='text-right mt-2'>
                                    <button onClick={() => userLogout()} className='brand-bg text-white lg:px-3 md:px-3 px-2 lg:py-2 md:py-2 py-1 font-semibold capitalize rounded-sm'>Logout</button>
                                </li>
                            </>

                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;