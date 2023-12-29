/* eslint-disable no-unused-vars */
import moment from 'moment/moment';
import React, { useEffect, useRef, useState } from 'react';
import Countdown from 'react-countdown';
import Timer from '../../Timer/Timer';

const EventWedget = () => {
    const eventData = [
        {
            poster: "https://sayidan.kenzap.com/wp-content/uploads/2016/07/galery-popup-6-3-569x331.jpg",
            title: "ALUMNI ASSOCIATION WHITE HALL EXHIBITION",
            eventLocaton: "Findlancer Terrace, Gondosuli, California",
            eventDay: 20,
        }
    ];


    return (
        <div className='py-10 bg-slate-100'>
            <div className="container mx-auto px-2 lg:px-3 xl:px-14">
                <h2 className='text-xl md:text-3xl uppercase text-center pb-8 tracking-wider'>Upcoming Event</h2>
                {
                    eventData.map((data, i) =>
                        <div key={i} className="lg:flex mx-auto">
                            <div className="w-full lg:w-1/2 mx-auto">
                                <img className='mx-auto' src={data.poster} alt="" />
                            </div>
                            <div className="w-full lg:w-1/2 mx-auto">
                                <div className='flex justify-center pt-8 lg:pt-0'>
                                    <div className='ps-5'>
                                        <h1 className='font-semibold text-lg xl:text-4xl tracking-wide text-gray-700 leading-snug'>{data.title}</h1>
                                        <h4 className='pb-4 text-slate-400 flex gap-2 items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="fill-slate-400 p-0" viewBox="0 0 16 16">
                                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                            </svg>
                                            {data.eventLocaton}
                                        </h4>
                                    </div>
                                    <div className="bg-slate-200 h-24 ms-6 lg:ms-0">
                                        <h1 className='text-3xl pt-4 pb-1 px-5'>31</h1>
                                        <h4 className='text-xl text-center pb-1'>Dec</h4>
                                        <h5 className='font-thin w-full bg-slate-300 text-center py-1'>2023</h5>
                                    </div>
                                </div>


                                <div className="counter text-center ps-5 lg:flex items-center gap-5 lg:mt-16 mt-5">
                                    <div className="py-3 text-center">
                                        <h1 className="lg:text-4xl xl:text-5xl md:text-3xl text-4xl text-slate-500"><Timer duration={data.eventDay * 24 * 60 * 60 * 1000}></Timer></h1>
                                        <div className="flex">
                                        </div>
                                    </div>
                                    <button className='btn btn-warning btn-sm md:btn-md rounded-none mx-auto w-36 lg:w-52 tracking-wider text-white md:text-lg'>Join Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default EventWedget;