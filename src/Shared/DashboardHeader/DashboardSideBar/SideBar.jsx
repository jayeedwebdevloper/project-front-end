/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const SideBar = ({ index1, setIndex1 }) => {
    return (
        <div className="flex-none h-fit">
            <div id='changeIndex' className={`drawer lg:drawer-open h-full fixed left-0 z-[${index1}]`}>
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />

                <div className={`drawer-side z-[${index1}] pt-[60px]`}>
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay" onClick={() => setIndex1(0)}></label>
                    <ul className={`menu p-4 w-80 min-h-full bg-primary text-base-content z-[${index1}]`}>
                        <div className="w-[70px] mx-auto pb-8 pt-3">
                            <img src={logo} alt="aaptec" />
                        </div>
                        <li className='border-white/25 border-b-2'>
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-lg text-white focus:text-white font-medium border-b border-white/25">
                                            <span className='text-white flex gap-3 items-center'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                            </svg> Home</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-white`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="pe-4 ps-8 pb-2 pt-4">
                                            <Link to={'/dashboard876admingo/slider'} className='text-white text-[17px] flex gap-3 items-center'><svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" className='fill-white' viewBox="0 0 512 512"><path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" /></svg> Slider</Link>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </li>
                        <li className='border-white/25 border-b-2'>
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-lg text-white focus:text-white font-medium border-b border-white/25">
                                            <span className='text-white flex gap-3 items-center'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                                            </svg> Organization</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-white`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="hover:bg-transparent panelbg focus:bg-white p-0 w-full">
                                            <div className='flex flex-col w-full ps-5'>
                                                <Link to={'/dashboard876admingo/executive-committee'} className='text-white text-[17px] flex gap-3 items-center p-3 rounded-md hover:bg-black/10 w-full'><svg xmlns="http://www.w3.org/2000/svg" height="25" width="28" className='fill-white' viewBox="0 0 640 512"><path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" /></svg> Executive Committee</Link>

                                                <Link to={'/dashboard876admingo/past-leaders'} className='text-white text-[17px] flex gap-3 items-center p-3 rounded-md hover:bg-black/10 w-full'><svg xmlns="http://www.w3.org/2000/svg" height="22" width="25" className='fill-white' viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" /></svg> Past Leaders</Link>

                                                <Link to={'/dashboard876admingo/aaptec-member'} className='text-white text-[17px] flex gap-3 items-center p-3 rounded-md hover:bg-black/10 w-full'><svg xmlns="http://www.w3.org/2000/svg" height="22" width="25" className='fill-white' viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" /></svg> AAPTEC Member</Link>

                                                <Link to={'/dashboard876admingo/constitution'} className='text-white text-[17px] flex gap-3 items-center p-3 rounded-md hover:bg-black/10 w-full'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="22" width="27" className='fill-white' viewBox="0 0 576 512"><path d="M565.6 36.2C572.1 40.7 576 48.1 576 56V392c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456V120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5V421.2l120-45.7V90.8L48 136.5zM360 422.7V137.3l-144-48V374.7l144 48zm48-1.5l120-45.7V90.8L408 136.5V421.2z" /></svg> Constitution</Link>
                                            </div>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </li>
                        <li className='border-white/25 border-b-2'>
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-lg text-white focus:text-white font-medium border-b border-white/25">
                                            <span className='text-white flex gap-3 items-center'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                            </svg> Career & Help</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-white`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="hover:bg-transparent panelbg focus:bg-white p-0 w-full">
                                            <div className='flex flex-col w-full ps-5'>
                                                <Link to={'/dashboard876admingo/job-news-circular'} className='text-white text-[17px] flex gap-3 items-center p-3 rounded-md hover:bg-black/10 w-full'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                                </svg> Job News & Circular</Link>


                                                <Link to={'/dashboard876admingo/apply-job'} className='text-white text-[17px] flex gap-3 items-center p-3 rounded-md hover:bg-black/10 w-full'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                                </svg> Apply for Job</Link>
                                            </div>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </li>
                        <li className='border-white/25 border-b-2'>
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-lg text-white focus:text-white font-medium border-b border-white/25">
                                            <span className='text-white flex gap-3 items-center'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg> Events</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-white`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="hover:bg-transparent panelbg focus:bg-white p-0 w-full">
                                            <div className='flex flex-col w-full ps-5'>
                                                <Link to={'/dashboard876admingo/event-calender'} className='text-white text-[17px] flex gap-3 items-center p-3 rounded-md hover:bg-black/10 w-full'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                                </svg> Event Calender</Link>
                                            </div>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </li>
                        <li className='border-white/25 border-b-2'>
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-lg text-white focus:text-white font-medium border-b border-white/25">
                                            <span className='text-white flex gap-3 items-center'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                            </svg> Career & Help</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-white`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="hover:bg-transparent panelbg focus:bg-white p-0 w-full">
                                            <div className='flex flex-col w-full ps-5'>
                                                <Link to={'/dashboard876admingo/job-news-circular'} className='text-white text-[17px] flex gap-3 items-center p-3 rounded-md hover:bg-black/10 w-full'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                                </svg> Job News & Circular</Link>


                                                <Link to={'/dashboard876admingo/apply-job'} className='text-white text-[17px] flex gap-3 items-center p-3 rounded-md hover:bg-black/10 w-full'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                                </svg> Apply for Job</Link>
                                            </div>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </li>
                        <li className='border-white/25 border-b-2'>
                            <Link to={'/dashboard876admingo/add-news'} className='text-white text-[17px] focus:text-white hover:text-white flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" className='fill-white' viewBox="0 0 512 512"><path d="M168 80c-13.3 0-24 10.7-24 24V408c0 8.4-1.4 16.5-4.1 24H440c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H168zM72 480c-39.8 0-72-32.2-72-72V112C0 98.7 10.7 88 24 88s24 10.7 24 24V408c0 13.3 10.7 24 24 24s24-10.7 24-24V104c0-39.8 32.2-72 72-72H440c39.8 0 72 32.2 72 72V408c0 39.8-32.2 72-72 72H72zM176 136c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V136zm200-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24z" /></svg> News & Notice</Link>
                        </li>

                        <li className='border-white/25 border-b-2'>
                            <Link to={'/dashboard876admingo/add-social'} className='text-white text-[17px] focus:text-white hover:text-white flex gap-3'><svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 576 512"><path d="M550.5 241l-50.1-86.8c1.1-2.1 1.9-4.6 1.9-7.2 0-8-6.7-14.7-14.7-15l-55.4-95.9c.5-1.6 1.1-3.2 1.1-4.8 0-8.6-7-15.3-15.3-15.3-4.8 0-8.8 2.1-11.8 5.6H299.5C296.8 18.1 292.8 16 288 16s-8.8 2.1-11.5 5.6H170.4C167.5 18.1 163.4 16 158.6 16c-8.3 0-15.3 6.7-15.3 15.3 0 1.6 .5 3.5 1.1 4.8l-56 97.2c-5.4 2.4-9.1 7.5-9.1 13.7 0 .5 .3 1.1 .3 1.6l-53.3 92.1c-7.2 1.3-12.6 7.5-12.6 15 0 7.2 5.1 13.4 12.1 15l55.2 95.4c-.5 1.6-.8 2.9-.8 4.8 0 7.2 5.1 13.4 12.1 14.7l51.7 89.7c-.5 1.6-1.1 3.5-1.1 5.4 0 8.6 7 15.3 15.3 15.3 4.8 0 8.8-2.1 11.5-5.4h106.9C279.2 493.9 283.4 496 288 496s8.8-2.1 11.5-5.4h107.1c2.7 2.9 6.7 4.8 11 4.8 8.6 0 15.3-7 15.3-15.3 0-1.6-.3-2.9-.8-4.3l51.7-90.3c7-1.3 12.1-7.5 12.1-14.7 0-1.6-.3-3.2-.8-4.8l54.9-95.4c7-1.3 12.3-7.5 12.3-15 0-7.2-5.1-13.4-11.8-14.7zM153.5 450.7l-43.7-75.8h43.7v75.8zm0-83.8h-43.7c-.3-1.1-.8-2.1-1.3-3.2l45-47.4v50.6zm0-62.4l-50.4 53.3c-1.3-.5-2.7-1.3-4-1.6L43.4 259.8c.5-1.3 .5-2.7 .5-4s0-2.4-.3-3.5l52-90c2.7-.3 5.4-1.1 7.8-2.7l50.1 52v92.9zm0-102.3l-45.8-47.4c1.3-2.1 2.1-4.8 2.1-7.8 0-.3-.3-.8-.3-1.1l43.9-15.8v72.1zm0-80.6l-43.7 15.8 43.7-75.5v59.7zm326.5 39.1l.8 1.3L445.5 329.1l-63.8-67.2 98-101.5 .3 .3zM291.8 355.1l11.5 11.8H280.5l11.3-11.8zm-.3-11.3l-83.3-85.4 79.6-84.4 83 87.6-79.3 82.2zm5.4 5.9l79.3-82.2 67.5 71.3-5.9 28.1H313.7l-16.9-17.1zM410.4 44.4c1.1 .5 2.1 1.1 3.5 1.3l57.9 100.7v.5c0 2.9 .8 5.6 2.1 7.8L376.4 256l-83-87.6L410.4 44.4zm-9.1-2.1L287.7 162.5l-57.1-60.3 166.3-60h4.3zm-123.5 0c2.7 2.7 6.2 4.3 10.2 4.3s7.5-1.6 10.2-4.3h75L224.8 95.8 173.9 42.3h103.9zm-116.2 5.6l1.1-2.1a33.8 33.8 0 0 0 2.7-.8l51.2 53.8-54.9 19.8V47.9zm0 79.3l60.8-22 59.7 63.2-79.6 84.1-41-42.1v-83.3zm0 92.7L198 257.6l-36.4 38.3v-76.1zm0 87.9l42.1-44.5 82.8 86-17.1 17.7H161.6v-59.2zm7 162.1c-1.6-1.6-3.5-2.7-5.9-3.5l-1.1-1.6v-89.7h99.9l-91.6 94.8h-1.3zm129.9 0c-2.7-2.4-6.4-4.3-10.4-4.3s-7.8 1.9-10.4 4.3h-96.4l91.6-94.8h38.3l91.6 94.8H298.4zm120-11.8l-4.3 7.5c-1.3 .3-2.4 .8-3.5 1.3l-89.2-91.9h114.4l-17.4 83zm12.9-22.2l12.9-60.8h22l-34.8 60.8zm34.8-68.8h-20.4l4.6-21.2 17.1 18.2c-.5 .8-1.1 1.9-1.3 2.9zm66.2-107.4l-55.4 96.7c-1.3 .5-2.7 1.1-4 1.9l-20.6-22 34.6-163.9 45.8 79.3c-.3 1.3-.8 2.7-.8 4.3 0 1.3 .3 2.4 .5 3.8z" /></svg> Social Links</Link>
                        </li>

                        <li className='border-white/25 border-b-2'><Link to={'/'} className='text-white text-[17px]'><svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" className='fill-white' viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" /></svg> Back To Website</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;