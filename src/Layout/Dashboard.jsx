/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/Context';
import useAdmin from '../hook/useAdmin';
import { Outlet } from 'react-router-dom';
import DashboardHeader from '../Shared/DashboardHeader/DashboardHeader';
import SideBar from '../Shared/DashboardHeader/DashboardSideBar/SideBar';

const Dashboard = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [index1, setIndex1] = useState(0);

    const changeIndex = () => {
        if (index1 == 0) {
            setIndex1(150);
        } else {
            setIndex1(0)
        }

    }
    const { userInfo } = useContext(AuthContext);
    const [isAdmin] = useAdmin(userInfo?.email);

    return (
        <div>
            <DashboardHeader changeIndex={changeIndex} setIndex1={setIndex1}></DashboardHeader>
            <div className="flex">
                <SideBar index1={index1} setIndex1={setIndex1}></SideBar>
                <div className="w-full lg:w-2/3 xl:w-3/4 2xl:w-4/5 mt-16 me-0 ms-auto" onClick={() => setIndex1(0)}>
                    <Outlet context={{setIndex1}} ></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;