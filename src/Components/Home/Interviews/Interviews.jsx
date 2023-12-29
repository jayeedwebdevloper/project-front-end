/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Interviews = () => {
    
    const {data: interviewData=[]} = useQuery({
        queryKey: ["interviewData"],
        queryFn: async() => {
            const res = await fetch("http://localhost:3000/interview");
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='container mx-auto px-4 md:px-5'>
            <div className="pt-5 pb-14">
                <h1 className="text-center pt-5 pb-14 text-3xl lg:text-5xl">Almuni Interview</h1>
               {
                    interviewData.map((data, i) => 
                    <div key={i} className="lg:flex gap-5 items-center">
                        <div className="lg:w-1/2">
                            <img className='w-full h-full' src={data.image} alt="" />
                        </div>
                        <div className="lg:w-1/2 px-4">
                            <h1 className='text-2xl md:text-5xl py-4'>{data.name}</h1>
                            <p className='text-md tracking-wider text-slate-400 pb-14'>{data.details.substring(0, 700)}...</p>
                            <button className='btn font-thin tracking-widest md:text-xl text-sm border-warning border-[3px] px-4 py-3 h-auto bg-white capitalize rounded-none text-black hover:bg-warning hover:border-warning'>see {data.name} story</button>
                        </div>
                    </div>)
               }
            </div>
        </div>
    );
};

export default Interviews;