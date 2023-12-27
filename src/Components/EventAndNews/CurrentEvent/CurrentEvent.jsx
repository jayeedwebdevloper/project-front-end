/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Timer from '../../Timer/Timer';

const CurrentEvent = () => {
    useEffect(() => { window.scrollTo(0, 0) }, []);

    const eventData = [
        {
            day: 'sun',
            month: 'december',
            date: '31',
            year: 2023,
            title: "Alumni Association White Hall Exhibition",
            eventDay: 20,
            location: "Findlancer Terrace, Gondosuli, California",
            Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda enim velit quasi quae alias non illo, modi ex dolore pariatur adipisci doloribus voluptatem optio consequatur quibusdam ad quia possimus nobis.",
            poster: "https://sayidan.kenzap.com/wp-content/uploads/2016/07/galery-popup-6-3-569x331.jpg",
            current: true
        },
        {
            day: 'mon',
            month: 'december',
            date: '04',
            year: 2024,
            title: "Annual Meet Up And Scholarship",
            eventDay: 30,
            location: "Sayidan Street, Gondomanan, 8993, San Francisco, CA",
            Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda enim velit quasi quae alias non illo, modi ex dolore pariatur adipisci doloribus voluptatem optio consequatur quibusdam ad quia possimus nobis.",
            poster: "https://sayidan.kenzap.com/wp-content/uploads/2016/07/galery-popup-6-3-569x331.jpg",
        },
        {
            day: 'tue',
            month: 'november',
            date: '07',
            year: 2024,
            title: "Annual meetup and scholarship presentation",
            eventDay: 60,
            location: "363 Oakwood Avenue Irmo, SC 29063",
            Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda enim velit quasi quae alias non illo, modi ex dolore pariatur adipisci doloribus voluptatem optio consequatur quibusdam ad quia possimus nobis.",
            poster: "https://sayidan.kenzap.com/wp-content/uploads/2016/07/galery-popup-6-3-569x331.jpg",
        },
        {
            day: 'thu',
            month: 'november',
            date: '17',
            year: 2024,
            title: "Club Sponsorship 2022-2023",
            eventDay: 90,
            location: "727 South Roehampton Ave. Fuquay Varina, NC 27526",
            Details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda enim velit quasi quae alias non illo, modi ex dolore pariatur adipisci doloribus voluptatem optio consequatur quibusdam ad quia possimus nobis.",
            poster: "https://sayidan.kenzap.com/wp-content/uploads/2016/07/galery-popup-6-3-569x331.jpg",
        }
    ];

    return (
        <>
            {
                eventData.map((data, i) => {
                    if(data.current) {
                       return <div key={i} className='bg-primary pt-40 md:pt-32'>
                            <div className="relative">
                                <img className='w-full md:w-2/3 mx-auto' src={data.poster} alt={data.title} />
                                <div className="h-20 flex items-center justify-center md:h-32 bg-slate-200 z-[20] absolute bottom-8 right-1/2 left-1/2 -translate-x-1/2 w-11/12 md:w-2/5">
                                   <h1 className="lg:text-4xl xl:text-5xl md:text-3xl text-4xl text-black/80"><Timer duration={data.eventDay * 24 * 60 * 60 * 1000}></Timer></h1>
                                </div>
                            </div>
                            <div className="bg-white w-full">
                                <h1 className='text-center capitalize pt-8 text-2xl pb-5'>{data.month} {data.date} {data.year}</h1>
                                <h1 className='text-center capitalize text-3xl lg:text-4xl pb-5'>{data.title}</h1>
                                <h2 className='flex justify-center items-start gap-3 text-xl text-slate-400 pb-5'>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" className="fill-slate-400 pt-1" viewBox="0 0 16 16">
                                       <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                       <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                   </svg>
                                   {data.location}
                                </h2>
                                <p className='text-lg px-4 md:px-32 text-center text-slate-700 pb-5'>{data.Details}</p>
                                <div className="flex justify-center py-8">
                                    <button className='btn btn-warning rounded-none btn-wide text-white text-xl font-thin'>Join Now</button>
                                </div>
                            </div>
                        </div>
                    }
                })
            }
        </>
    );
};

export default CurrentEvent;