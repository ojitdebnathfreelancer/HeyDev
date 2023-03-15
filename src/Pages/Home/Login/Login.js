import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png';
import { loggedin } from '../../../redux/slices/loggedinUserSlice';
import { loginEmail, loginError, loginPassword } from '../../../redux/slices/loginSlice';
import '../../Home/Registation/Registation.css';

const Login = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.login);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        const all = JSON.parse(localStorage.getItem('users'));
        if (all) {
            setUsers(all);
        }
        else {
            setUsers([])
        }
    }, [])

    const handelLogin = e => {
        e.preventDefault();
        const form = e.target;

        const exist = users.find(u => u.email === user.email && u.password === user.password);

        if (exist) {
            localStorage.setItem('loggedin', JSON.stringify(exist))
            form.reset();
            const current = JSON.parse(localStorage.getItem('loggedin'))
            if (current) {
                dispatch(loggedin(current))
                navigate(from);
            }
        }
        else {
            dispatch(loginError('User Not Founded'))
        }


    };
    // user login 

    return (
        <div className='max-w-[350px] bg-white p-5 lg:mt-0 md:mt-0'>
            <div>
                <h1 className='text-3xl text-center uppercase regi-font font-bold relative pt-10'>
                    <img className='absolute top-[3px] left-[26%] h-[45px]' src={logo} alt="logo" />
                    seattle pacifig
                </h1>
                <p className='text-center uppercase font-semibold'>university</p>
                <h2 className='capitalize text-center font-bold text-2xl mt-4'>Get covered</h2>
                <p className='text-center px-[10px] mt-2 text-gray-500 font-medium'>login accept your LRAP Award now. at no cost to you.</p>
            </div>
            <div className='registation-form'>
                <form onSubmit={(e) => handelLogin(e)}>
                    <div className='info'>
                        <input onChange={(e) => {
                            dispatch(loginEmail(e.target.value))
                            dispatch(loginError(''))
                        }} type='email' placeholder='Student Email Address' required></input>
                        <input onChange={(e) => {
                            dispatch(loginPassword(e.target.value))
                            dispatch(loginError(''));
                        }} type='password' placeholder='Enter A Password' required></input>
                    </div>
                    <p className='text-center brand-color font-semibold mt-[10px]'>
                        {user?.error}
                    </p>
                    <button className='brand-bg text-white w-full py-2 text-[18px] mt-[15px] '>Accept My LRAP Award</button>

                    <p className='brand-color font-semibold mt-[20px]'>Check the box and click the accept button above to accept your LRAP Award no or commitment. accpeting your award simply confirms your coverd if you enroll at [clint] </p>
                </form>
            </div>
        </div>
    );
};

export default Login;