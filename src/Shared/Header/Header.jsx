/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { Menu } from '@headlessui/react';
import { AuthContext } from '../../Context/Context';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import useAdmin from '../../hook/useAdmin';

const Header = () => {
    const { userInfo, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin(userInfo?.email);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const nowTime = `${day} - ${months[month]} - ${year}`;
    const location = useLocation();
    const from = location.state?.from.pathname || '/';

    const signOut = () => {
        logOut()
            .then(() => {
                toast.success("Logged Out")
            });
    }

    // navigate

    const navigate = useNavigate();
    const goRegister = () => {
        navigate('/register')
    }
    const goLogin = () => {
        navigate('/login')
    }

    // CSS maintain 
    const [display, setDisplay] = useState('hidden');

    const changeDisplay = () => {
        if (display == "hidden") {
            setDisplay('');
        } else {
            setDisplay('hidden')
        }
    }

    const { data: news = [] } = useQuery({
        queryKey: ['news'],
        queryFn: async () => {
            const res = await fetch('https://back-end-bice-eight.vercel.app/news');
            const data = await res.json();
            return data;
        }
    });
    const { data: notice = [] } = useQuery({
        queryKey: ['notice'],
        queryFn: async () => {
            const res = await fetch('https://back-end-bice-eight.vercel.app/notice');
            const data = await res.json();
            return data;
        }
    });

    const { data: userInformation = [], refetch } = useQuery({
        queryKey: ["userInformation", userInfo?.email],
        queryFn: async () => {
            const res = await fetch(`https://back-end-bice-eight.vercel.app/users/${userInfo?.email}`);
            const data = await res.json();
            return data;
        }
    });

    return (
        <header className='bg-primary pt-2 w-full fixed left-0 right-0 top-0 z-[150]'>
            <div className="container mx-auto px-4 pb-3 md:px-5">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="w-full lg:w-1/3 flex">
                        <p className='text-white w-1/3 text-xs xl:text-lg lg:w-1/3'>{nowTime}</p>
                        <div className="ps-0 w-2/3 lg:w-2/3">
                            <marquee className={'text-white text-sm xl:text-lg'} direction="left">
                                <div className="flex gap-2">
                                    {
                                        news ? news.map((data, i) => <p key={i}>{data.newNews},</p>).reverse() : undefined
                                    } {
                                        notice ? notice.map((data, i) => <p key={i}>{data.newNotice},</p>).reverse() : undefined
                                    }
                                </div>
                            </marquee>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 flex justify-center">
                        <Link to={'/'}><img className='w-16' src={logo} alt="aaptec" /></Link>
                    </div>
                    <div className="w-full lg:w-1/3 flex items-center justify-between gap-5 lg:justify-end">

                        {/* Profile/ My Account */}

                        {
                            userInfo?.uid ?
                                <>
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                {
                                                    userInfo?.photoURL || userInformation.photoURL ? <img src={userInfo?.photoURL || userInformation.photoURL} alt={userInformation.userID} title={userInformation.userID} /> : <img alt={userInformation.userID} src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" title={userInformation.userID} />
                                                }
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-indigo-100 rounded-box w-52 left-0 lg:right-0 lg:left-auto">
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
                                                    <Link to={'/dashboard876admingo'} className="justify-between">
                                                        Dashboard
                                                    </Link>
                                                </li> : undefined
                                            }
                                            <li className='pt-6'><button onClick={signOut} className='btn btn-sm btn-error text-sm font-thin capitalize tracking-widest text-white hover:bg-red-900'>Log out</button></li>
                                        </ul>
                                    </div>
                                </>
                                :
                                <>
                                    <button onClick={() => goRegister()} className='btn btn-sm bg-indigo-500 border-0 btn-ghost text-white font-thin'>Sign up</button>
                                    <button onClick={() => goLogin()} className='btn btn-sm bg-indigo-500 border-0 btn-ghost text-white font-thin'>Login</button>
                                </>
                        }
                        <button onClick={changeDisplay} className="btn btn-square btn-ghost block lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-orange-50"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            <nav className="bg-white shadow-md">
                <div className="container mx-auto px-4 md:px-5">
                    <ul className={`w-full lg:flex py-3 justify-between bg-white ${display}`}>
                        <li className='py-1 lg:py-0'><Link className='tracking-wide font-semibold hover:text-indigo-700'>Home</Link></li>

                        <Menu as="div" className="relative block py-1 lg:py-0">
                            <Menu.Button className={`tracking-wide font-semibold flex items-center w-full hover:text-indigo-700`} id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Organization
                                <svg className="-mr-1 h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </Menu.Button>
                            <Menu.Items className={`absolute z-[200] bg-white px-3 shadow-md py-2 w-52`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                <li className='p-2'><Link to={'/organization/executive-committee'} className='hover:text-indigo-700 font-medium'>Executive Committee</Link></li>
                                <li className='p-2'><Link to={"/organization/past-leaders"} className='hover:text-indigo-700 font-medium'>Past Leaders</Link></li>
                                <li className='p-2'><Link to={"/organization/aaptec-member"} className='hover:text-indigo-700 font-medium'>AAPTEC Member</Link></li>
                                <li className='p-2'><Link to={"/organization/constitution"} className='hover:text-indigo-700 font-medium'>Constitution</Link></li>
                            </Menu.Items>
                        </Menu>

                        <Menu as="div" className="relative block py-1 lg:py-0">
                            <Menu.Button className={`tracking-wide font-semibold flex items-center w-full hover:text-indigo-700`} id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Event & News
                                <svg className="-mr-1 h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </Menu.Button>
                            <Menu.Items className={`absolute z-[200] bg-white px-3 shadow-md py-2 w-52`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                <li className='p-2'><Link to={'/event-registration'} className='hover:text-indigo-700 font-medium'>Event Registration</Link></li>
                                <li className='p-2'><Link to={"/upcoming-program"} className='hover:text-indigo-700 font-medium'>Upcoming Program</Link></li>
                                <li className='p-2'><Link to={'/current-event'} className='hover:text-indigo-700 font-medium'>Current Event</Link></li>
                                <li className='p-2'><Link to={'/past-event'} className='hover:text-indigo-700 font-medium'>Past Event</Link></li>
                            </Menu.Items>
                        </Menu>

                        <Menu as="div" className="relative block py-1 lg:py-0">
                            <Menu.Button className='tracking-wide font-semibold flex items-center hover:text-indigo-700'>
                                Gallery
                                <svg className="-mr-1 h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </Menu.Button>
                            <Menu.Items className={`absolute z-[200] bg-white px-3 shadow-md py-2 w-52`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                <li className='p-2'><Link className='hover:text-indigo-700 font-medium'>PTEC Campus</Link></li>
                                <li className='p-2'><Link className='hover:text-indigo-700 font-medium'>AAPTEC</Link></li>
                                <li className='p-2'><Link className='hover:text-indigo-700 font-medium'>Meeting</Link></li>
                                <li className='p-2'><Link className='hover:text-indigo-700 font-medium'>Event</Link></li>
                            </Menu.Items>
                        </Menu>

                        <Menu as="div" className="relative block py-1 lg:py-0">
                            <Menu.Button className='tracking-wide font-semibold flex items-center hover:text-indigo-700'>
                                Alumni Registration
                                <svg className="-mr-1 h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </Menu.Button>
                            <Menu.Items className={`absolute z-[200] bg-white px-3 shadow-md py-2 w-52`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                <li className='p-2'><Link className='hover:text-indigo-700 font-medium'>Apply for Registration</Link></li>
                                <li className='p-2'><Link className='hover:text-indigo-700 font-medium'>Registration Status</Link></li>
                                <li className='p-2'><Link className='hover:text-indigo-700 font-medium'>Renew & Pay Pending</Link></li>
                                <li className='p-2'><Link className='hover:text-indigo-700 font-medium'>Recent Member</Link></li>
                            </Menu.Items>
                        </Menu>

                        <Menu as="div" className="relative block py-1 lg:py-0">
                            <Menu.Button className='tracking-wide font-semibold flex items-center hover:text-indigo-700'>
                                Career & Help
                                <svg className="-mr-1 h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </Menu.Button>
                            <Menu.Items className={`absolute z-[200] bg-white px-3 shadow-md py-2 w-52`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                <li className='p-2'><Link className='hover:text-indigo-700 font-medium'>Job News & Circular</Link></li>
                                <li className='p-2'><Link className='hover:text-indigo-700 font-medium'>Post A Job</Link></li>
                                <li className='p-2'><Link className='hover:text-indigo-700 font-medium'>Apply for Job</Link></li>
                            </Menu.Items>
                        </Menu>

                        <Menu as="div" className="relative block py-1 lg:py-0">
                            <Menu.Button className='tracking-wide font-semibold flex items-center hover:text-indigo-700'>
                                About AAPTEC
                                <svg className="-mr-1 h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </Menu.Button>
                            <Menu.Items className={`absolute z-[200] bg-white px-3 shadow-md py-2 w-52`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                <li className='p-2'><Link to={'/about'} className='hover:text-indigo-700 font-medium'>About Us</Link></li>
                                <li className='p-2'><Link to={'/contact'} className='hover:text-indigo-700 font-medium'>Contact</Link></li>
                            </Menu.Items>
                        </Menu>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;