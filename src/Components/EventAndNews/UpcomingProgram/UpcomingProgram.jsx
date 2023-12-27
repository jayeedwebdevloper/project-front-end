/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Timer from '../../Timer/Timer';
import { Carousel } from 'react-responsive-carousel';
import Subscribe from '../../Home/Subscribe/Subscribe';

const UpcomingProgram = () => {
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
            <div className="upcoming-banner">
                <div className='container mx-auto px-4 lg:px-6'>
                    <div className="px-5 pt-40 pb-12">
                        <h1 className='text-center text-slate-100 text-2xl pb-8 font-light'>Upcoming Program</h1>
                        {
                            eventData.map((data, i) => {
                                if (i <= 0) {
                                    return <div key={i} className="lg:flex items-center">
                                        <div className="w-full lg:w-1/2 h-[450px] overflow-hidden relative">
                                            <img className='w-full h-full absolute left-0 right-0 top-0 bottom-0 z-[50px]' src={data.poster} alt="" />
                                            <div className="counter flex items-center justify-center absolute z-[60px] h-full w-full bg-black/50 left-0 right-0 top-0 bottom-0">
                                                <div className="py-3">
                                                    <h1 className="lg:text-4xl xl:text-5xl md:text-3xl text-4xl text-white/80"><Timer duration={data.eventDay * 24 * 60 * 60 * 1000}></Timer></h1>
                                                    <div className="flex">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-1/2">
                                            <div className='flex pt-8 lg:pt-0'>
                                                <div className='ps-5'>
                                                    <h1 className='font-semibold text-2xl xl:text-4xl tracking-wide text-white/80 leading-snug'>{data.title}</h1>
                                                    <h4 className='pb-4 pt-8 text-slate-400 flex gap-2 items-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="fill-slate-400 p-0" viewBox="0 0 16 16">
                                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                                        </svg>
                                                        {data.location}
                                                    </h4>
                                                </div>
                                                <div className="bg-slate-200 h-24 ms-6 lg:ms-0">
                                                    <h1 className='text-3xl pt-4 pb-1 px-5'>31</h1>
                                                    <h4 className='text-xl text-center pb-1'>Dec</h4>
                                                    <h5 className='font-thin w-full bg-slate-300 text-center py-1'>2023</h5>
                                                </div>
                                            </div>


                                            <div className="counter ps-5 lg:flex items-center gap-5">
                                                <button className='btn btn-warning rounded-none w-36 lg:w-52 tracking-wider text-white text-lg'>Join Now</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            }
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 lg:px-6 pb-6">
                <h1 className='text-slate-700 text-center text-2xl pt-8 pb-5'>All Alumni Events</h1>
                <div className="lg:mt-16 mt-40">
                    <Carousel infiniteLoop swipeable>
                        {
                            eventData.map((slider, i) =>
                                <div className="w-full lg:w-2/3 mx-auto" key={i}>
                                    <p className='text-slate-600 text-lg'>{slider.year}</p>
                                    <h3 className='capitalize text-2xl font-light'>{slider.month}</h3>
                                    <div className="flex gap-2 pt-6">
                                        <div className="basis-1/5">
                                            <h1 className='text-5xl font-semibold text-yellow-500'>{slider.date}</h1>
                                            <p>{slider.month}</p>
                                        </div>
                                        <div className="basis-4/5 pb-12 text-start">
                                            <h1 className='text-4xl font-normal pb-5'>{slider.title}</h1>
                                            <p>{slider.Details}</p>
                                            <h4 className='pb-4 pt-8 text-slate-400 flex gap-2 items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="fill-slate-400 p-0" viewBox="0 0 16 16">
                                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                                </svg>
                                                {slider.location}
                                            </h4>
                                            <button className='mt-6 btn bg-transparent border-2 px-8 shadow-md hover:bg-warning border-warning text-slate-900 text-lg font-light rounded-none'>Join Now</button>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </Carousel>
                </div>
            </div>
            <Subscribe></Subscribe>
        </>
    );
};

export default UpcomingProgram;