/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Context';
import useAdmin from '../../hook/useAdmin';
import { Link, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import logo from '../../assets/logo.png'

const DashboardHeader = () => {
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
        <div className="navbar bg-base-100 shadow">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex-none">
                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="btn btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
                        </div>
                        <div className="drawer-side z-[200]">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-primary text-base-content">
                                <div className="w-[70px] mx-auto pb-8 pt-3">
                                    <img src={logo} alt="aaptec" />
                                </div>
                                <li className='border-white/25 border-b-2'><Link to={'/dashboard/add-news'} className='text-white text-[17px] focus:text-white hover:text-white'><svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" className='fill-white' viewBox="0 0 512 512"><path d="M168 80c-13.3 0-24 10.7-24 24V408c0 8.4-1.4 16.5-4.1 24H440c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H168zM72 480c-39.8 0-72-32.2-72-72V112C0 98.7 10.7 88 24 88s24 10.7 24 24V408c0 13.3 10.7 24 24 24s24-10.7 24-24V104c0-39.8 32.2-72 72-72H440c39.8 0 72 32.2 72 72V408c0 39.8-32.2 72-72 72H72zM176 136c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V136zm200-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24z" /></svg> News & Notice</Link></li>

                                <li className='border-white/25 border-b-2'><Link to={'/dashboard/slider'} className='text-white text-[17px]'><svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" className='fill-white' viewBox="0 0 512 512"><path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" /></svg> Slider</Link></li>

                                <li className='border-white/25 border-b-2'><Link to={'/'} className='text-white text-[17px]'><svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" className='fill-white' viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" /></svg> Home</Link></li>
                            </ul>
                        </div>
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