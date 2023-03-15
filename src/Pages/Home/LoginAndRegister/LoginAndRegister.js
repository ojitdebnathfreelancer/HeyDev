import React, { useState } from 'react';
import './LoginAndRegister.css';
import Login from '../Login/Login';
import Registation from '../Registation/Registation';

const LoginAndRegister = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <div className=''>
            <div className='bg-white py-5 mt-5'>
                <div className="slide-controls">
                    <input type="radio" name="slide" id="login" />
                    <input type="radio" name="slide" id="signup" />
                    <label
                        onClick={() => {
                            setToggle(true);
                        }}
                        htmlFor="login"
                        className="slide login"
                    >
                        Sign Up
                    </label>
                    <label
                        onClick={() => {
                            setToggle(false);
                        }}
                        htmlFor="signup"
                        className="slide signup"
                    >
                        Login
                    </label>
                    <div className="slider-tab"></div>
                </div>
            </div>
            <div className=' flex max-w-[350px] overflow-hidden'>
                <div className={`${toggle ? '-ml-[100%]' : 'ml-0'}`}>
                    <Login />
                </div>
                <div className={`${toggle ? 'mr-0' : '-mr-[100%]'}`}>
                    <Registation />
                </div>
            </div>
        </div>
    );
};

export default LoginAndRegister;