/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Context/Context';
import useAdmin from '../hook/useAdmin';
import { Outlet } from 'react-router-dom';
import DashboardHeader from '../Shared/DashboardHeader/DashboardHeader';

const Dashboard = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const { userInfo } = useContext(AuthContext);
    const [isAdmin] = useAdmin(userInfo?.email);

    return (
        <div>
            <DashboardHeader></DashboardHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;