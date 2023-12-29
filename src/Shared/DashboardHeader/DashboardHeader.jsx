/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Context';
import useAdmin from '../../hook/useAdmin';
import { Link, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';

const DashboardHeader = ({ changeIndex, index, setIndex1 }) => {
    const { userInfo, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin(userInfo?.email);

    const location = useLocation();
    const from = location.state?.from.pathname || '/';

    const { data: userInformation = [], refetch } = useQuery({
        queryKey: ["userInformation", userInfo?.email],
        queryFn: async () => {
            const res = await fetch(`https://back-end-bice-eight.vercel.app/users/${userInfo?.email}`);
            const data = await res.json();
            return data;
        }
    });

    const signOut = () => {
        logOut()
            .then(() => {
                toast.success("Logged Out")
            });
    }

    return (
        <div className="navbar bg-base-100 shadow fixed left-0 top-0 right-0 z-[300]">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex-none">
                    <div className="drawer-content flex flex-col justify-center">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" onClick={() => { changeIndex, setIndex1(150) }} className="btn btn-square btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
                    </div>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Dashboard</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    userInfo?.photoURL || userInformation.photoURL ? <img src={userInfo?.photoURL || userInformation.photoURL} alt={userInformation.userID} title={userInformation.userID} /> : <img alt={userInformation.userID} src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" title={userInformation.userID} />
                                }
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[150] p-2 shadow menu menu-sm dropdown-content bg-indigo-100 rounded-box w-52 right-0">
                            <li className='pt-1'><a className='hover:bg-transparent font-thin text-md'>{userInformation.userID}</a></li>
                            <li className='pb-1'><a className='hover:bg-transparent font-semibold text-lg capitalize pt-0'>{userInformation.firstName} {userInformation.lastName}</a></li>
                            <li className='pb-1'><a className='hover:bg-transparent font-thin text-md lowercase pt-0'>{userInformation.email}</a></li>
                            <li className='pb-1'><a className='hover:bg-transparent font-thin text-md lowercase pt-0'>+{userInformation.phoneNumber}</a></li>
                            <li className='pb-1'><a className='hover:bg-transparent font-normal text-md capitalize pt-0'>{userInformation?.designation}</a></li>
                            <li>
                                <Link to={'/my-profile'} className="justify-between">
                                    My Profile
                                </Link>
                            </li>
                            <li>
                                <Link className="justify-between">
                                    My Resume
                                </Link>
                            </li>
                            <li>
                                <Link className="justify-between">
                                    My ID Card
                                </Link>
                            </li>
                            <li>
                                <Link className="justify-between">
                                    Update Password
                                </Link>
                            </li>
                            {
                                isAdmin ? <li>
                                    <Link to={'/dashboard'} className="justify-between">
                                        Dashboard
                                    </Link>
                                </li> : undefined
                            }
                            <li className='pt-6'><button onClick={signOut} className='btn btn-sm btn-error text-sm font-thin capitalize tracking-widest text-white hover:bg-red-900'>Log out</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;