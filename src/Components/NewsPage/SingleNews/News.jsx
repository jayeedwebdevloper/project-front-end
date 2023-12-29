/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    useEffect(() => {window.scrollTo(0,0)}, []);
    const data = useLoaderData();
    return (
        <div className='pt-44'>
            <div className="container mx-auto px-4 lg:px-7">
                <h1 className='text-slate-800 text-xl font-semibold pb-5'>{data[0]?.newsTitle}</h1>
                <div className="w-full md:w-[500px]">
                    <img className='w-full' src={data[0]?.photo} alt={data[0]?.newsTitle} />
                </div>
                <p className='flex items-center text-sm gap-2 py-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg> {data[0]?.date}</p>
                <p className="pt-4 pb-8 text-justify">{data[0]?.newNews}</p>
            </div>
        </div>
    );
};

export default News;