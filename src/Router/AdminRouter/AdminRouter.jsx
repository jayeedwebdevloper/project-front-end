/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Context';
import useAdmin from '../../hook/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRouter = ({ children }) => {
    const { userInfo, loader } = useContext(AuthContext);
    const [isAdmin, adminLoading] = useAdmin(userInfo?.email);
    const location = useLocation();

    if (loader || adminLoading) {
        return <p className='text-5xl text-center pt-52'>Loading...</p>
    }
    if (userInfo && isAdmin) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default AdminRouter;