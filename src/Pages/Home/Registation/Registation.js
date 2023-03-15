import React, { useState } from 'react';
import './Registation.css';
import logo from '../../../assets/logo/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { email, firstName, lastName, password } from '../../../redux/slices/registationSlice';
import { loggedin } from '../../../redux/slices/loggedinUserSlice';
import { useLocation, useNavigate } from 'react-router-dom';

const Registation = () => {

    const dispatch = useDispatch();
    const [teram, setTeram] = useState(false);
    const userInof = useSelector(state => state.registaion);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handelRegistation = e => {
        e.preventDefault();
        const form = e.target;
        const users = JSON.parse(localStorage.getItem('users'));

        let all = [];

        if (users) {
            all = [...users, userInof]
        }
        else {
            all.push(userInof);
        }

        localStorage.setItem('users', JSON.stringify(all))
        localStorage.setItem('loggedin', JSON.stringify(userInof))
        form.reset();
        setTeram(false)

        const current = JSON.parse(localStorage.getItem('loggedin'));
        if (current) {
            dispatch(loggedin(current))
            navigate(from);
        }
        else {
            dispatch(loggedin({}))
        }
    };
    // user registation 

    return (
        <div className='max-w-[350px] bg-white p-5 lg:mt-0 md:mt-0'>
            <div>
                <h1 className='text-3xl text-center uppercase regi-font font-bold relative pt-5'>
                    <img className='absolute top-[-15px] left-[26%] h-[45px]' src={logo} alt="logo" />
                    seattle pacifig
                </h1>
                <p className='text-center uppercase font-semibold'>university</p>
                <h2 className='capitalize text-center font-bold text-2xl mt-4'>Get covered</h2>
                <p className='text-center px-[10px] mt-2 text-gray-500 font-medium'>accept your LRAP Award now. at no cost to you.</p>
            </div>
            <div className='registation-form'>
                <form onSubmit={(e) => handelRegistation(e)}>
                    <div className='info'>
                        <input onChange={(e) => dispatch(firstName(e.target.value))} type='text' placeholder='Student First Name' required></input>
                        <input onChange={(e) => dispatch(lastName(e.target.value))} type='text' placeholder='Student Last Name' required></input>
                        <input onChange={(e) => dispatch(email(e.target.value))} type='email' placeholder='Student Email Address' required></input>
                        <input onChange={(e) => dispatch(password(e.target.value))} type='password' placeholder='Enter A Password' required></input>
                    </div>
                    <label className='flex items-center condition mt-[10px]'>
                        <input onClick={() => setTeram(!teram)} type="checkbox" />
                        <p className='brand-color'>I confirm that i have recive and accept my LRAP Award</p>
                    </label>
                    <button disabled={!teram} className={`text-white w-full py-2 text-[18px] mt-[15px] ${teram ? 'brand-bg' : 'bg-gray-400'}`}>Accept My LRAP Award</button>

                    <p className='brand-color font-semibold mt-[20px]'>Check the box and click the accept button above to accept your LRAP Award no or commitment. accpeting your award simply confirms your coverd if you enroll at [clint] </p>
                </form>
            </div>
        </div>
    );
};

export default Registation;