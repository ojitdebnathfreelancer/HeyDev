import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Sheared/Loader/Loader';

const PrivetRoute = ({ children }) => {
    const user = useSelector(state => state.loggedin);
    const location = useLocation();

    if (user?.isLoading) {
        return <Loader />
    }

    if (user?.loggedinUser?.email) {
        return children
    }

    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;