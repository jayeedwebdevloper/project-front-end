/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NewsPage = () => {
    useEffect(() => { window.scrollTo(0, 0) }, []);

    const {data:news=[]} = useQuery({
        queryKey: ['news'],
        queryFn: async() => {
            const res = await fetch("http://localhost:3000/news");
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='pt-44'>
            <div className="container mx-auto px-4 lg:px-7">
                {
                    news.map((data, i) => <div key={i} className='pb-8'>
                        <Link to={`/news/${data._id}`} className='text-xl font-semibold px-3 border-s-4 border-warning py-2 hover:text-warning'>{data.newsTitle}</Link>
                        <div className="w-full md:w-[500px] my-3">
                            <img className='w-full h-auto' src={data.photo} alt={data.newsTitle} />
                        </div>
                        <p className='flex text-sm font-thin gap-2 items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg> {data.date}</p>
                        <p className="py-3">
                            {data.newNews.substring(0, 300)}.....<Link className='ps-2 text-primary' to={`/news/${data._id}`}>See More..</Link>
                        </p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default NewsPage;