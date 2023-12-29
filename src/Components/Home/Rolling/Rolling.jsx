/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Rolling = () => {
    const { data: newsData = [] } = useQuery({
        queryKey: ["newsData"],
        queryFn: async () => {
            const res = await fetch('https://back-end-bice-eight.vercel.app/news');
            const data = await res.json();
            return data;
        }
    })

    const {data: careerData = []} = useQuery({
        queryKey: ["careerData"],
        queryFn: async() => {
            const res = await fetch("http://localhost:3000/jobs");
            const data = await res.json();
            return data;
        }
    })

    const eventsData = [
        {
            day: 'sun',
            month: 'dec',
            date: '31',
            title: "Alumni Association White Hall Exhibition",
            location: "Findlancer Terrace, Gondosuli, California",
            Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda enim velit quasi quae alias non illo, modi ex dolore pariatur adipisci doloribus voluptatem optio consequatur quibusdam ad quia possimus nobis."
        },
        {
            day: 'mon',
            month: 'dec',
            date: '04',
            title: "Annual Meet Up And Scholarship",
            location: "Sayidan Street, Gondomanan, 8993, San Francisco, CA",
            Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda enim velit quasi quae alias non illo, modi ex dolore pariatur adipisci doloribus voluptatem optio consequatur quibusdam ad quia possimus nobis."
        },
        {
            day: 'tue',
            month: 'nov',
            date: '07',
            title: "Annual meetup and scholarship presentation",
            location: "363 Oakwood Avenue Irmo, SC 29063",
            Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda enim velit quasi quae alias non illo, modi ex dolore pariatur adipisci doloribus voluptatem optio consequatur quibusdam ad quia possimus nobis."
        },
        {
            day: 'thu',
            month: 'nov',
            date: '17',
            title: "Club Sponsorship 2022-2023",
            location: "727 South Roehampton Ave. Fuquay Varina, NC 27526",
            Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda enim velit quasi quae alias non illo, modi ex dolore pariatur adipisci doloribus voluptatem optio consequatur quibusdam ad quia possimus nobis."
        }
    ];

    return (
        <div className='container mx-auto px-4 lg:px-5'>
            <div className="lg:flex pt-12 pb-5">
                <div className="w-full lg:w-1/3 xl:px-8 mt-5 lg:mt-0">
                    <h1 className='text-lg w-full mx-auto pb-8 tracking-wider'>Latest News</h1>
                    <div className="w-full mx-auto overflow-y-auto rolling-boxes bg-white overflow-hidden">
                        {
                            newsData.map((data, i) =>
                                <div key={i} className='flex gap-4 mb-8'>
                                    <img className="w-32 h-20" src={data.photo} alt="" />
                                    <div className="w-2/3">
                                        <Link className='pb-3 text-lg font-medium tracking-wider'>{data.newsTitle}</Link>
                                        <p className='text-slate-500'>
                                            {
                                                data.newNews.substring(0, 50)
                                            }
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <button className='bg-slate-200 text-xl font-thin text-slate-700 btn w-full mx-auto rounded-none'>View All News</button>
                </div>
                <div className="w-full lg:w-1/3 xl:px-8 mt-5 lg:mt-0">
                    <h1 className='text-lg w-full mx-auto pb-8 tracking-wider'>Career Opportunity</h1>
                    <div className="w-full mx-auto overflow-y-auto rolling-boxes bg-white overflow-hidden">
                        {
                            careerData.map((data, i) =>
                                <div key={i} className='flex gap-4 mb-8'>
                                    <div className="h-24 p-2 flex items-center justify-center w-24 border rounded-full">
                                        <img className="w-full" src={data.logo} alt="" />
                                    </div>
                                    <div className="w-2/3">
                                        <Link to={`/jobs/${data._id}`} className='pb-3 text-lg font-medium tracking-wider'>{data.title}</Link>
                                        <p className='text-slate-500'>
                                            {
                                                data.details.substring(0, 50)
                                            }
                                        </p>
                                    </div>
                                </div>
                            ).reverse()
                        }
                    </div>
                    <button className='bg-slate-200 text-xl font-thin text-slate-700 btn w-full mx-auto rounded-none'>View All Opportunity</button>
                </div>
                <div className="w-full lg:w-1/3 xl:px-8 mt-5 lg:mt-0">
                    <h1 className='text-lg w-full mx-auto pb-8 tracking-wider'>Event Calendar</h1>
                    <div className="w-full mx-auto overflow-y-auto rolling-boxes bg-white overflow-hidden">
                        {
                            eventsData.map((data, i) =>
                                <div key={i} className='flex gap-4 mb-8 items-center'>
                                    <div className="h-24 p-2 flex flex-col items-center justify-center w-24 bg-slate-100">
                                        <p className='uppercase font-thin text-sm'>{data.day}</p>
                                        <p className='text-3xl text-orange-400'>{data.date}</p>
                                        <p className='uppercase font-thin text-sm'>{data.month}</p>
                                    </div>
                                    <div className="w-2/3">
                                        <Link className='pb-3 text-lg font-medium tracking-wider'>{data.title}</Link>
                                        <p className='text-slate-500 py-1'>
                                            {
                                                data.Details.substring(0, 50)
                                            }
                                        </p>
                                        <p className='flex gap-3 text-xs text-slate-400'> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="fill-slate-400 p-0" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                        </svg>{data.location}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <button className='bg-slate-200 text-xl font-thin text-slate-700 btn w-full mx-auto rounded-none'>View All Events</button>
                </div>
            </div>
        </div>
    );
};

export default Rolling;