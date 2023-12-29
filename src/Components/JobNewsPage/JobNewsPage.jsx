/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const JobNewsPage = () => {
    useEffect(() => { window.scrollTo(0, 0) }, []);

    const { data: jobs = [] } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await fetch("http://localhost:3000/jobs");
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='pt-44 pb-14'>
            <div className="container mx-auto px-4 lg:px-7">
                {
                    jobs.map((data, i) => <div key={i} className='pb-8'>
                        <Link to={`/jobs/${data._id}`} className='text-xl font-semibold px-3 py-2 hover:text-warning'>{data.title}</Link>
                        <div className="flex gap-3 items-center pt-4">
                            <div className="flex p-1 items-center justify-center shadow-md border rounded-full overflow-hidden h-32 w-32">
                                <img className='w-10/12' src={data.logo} alt={data.company} />
                            </div>
                            <div>
                                <h1 className='text-xl'>{data.company}</h1>
                                <a href={data.link} target="_blank" rel="noopener noreferrer" className='text-sm text-slate-400'>{data.link}</a>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default JobNewsPage;