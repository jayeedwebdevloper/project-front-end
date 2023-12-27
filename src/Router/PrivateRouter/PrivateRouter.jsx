/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { userInfo, loader } = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return <p className='text-5xl text-center pt-52 pb-52'>Loading...</p>
    }
    if (userInfo) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default PrivateRouter;