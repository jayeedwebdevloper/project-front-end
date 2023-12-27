/* eslint-disable no-unused-vars */
import React from 'react';

const Interviews = () => {
    const interviewData = [
        {
            photo: 'https://sayidan.kenzap.com/wp-content/uploads/2016/07/galery-popup-10-3-290x290.jpg',
            name: 'Hannah Jordan',
            comment: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima"
        }
    ]
    return (
        <div className='container mx-auto px-4 md:px-5'>
            <div className="py-5">
                <h1 className="text-center pt-5 pb-14 text-3xl lg:text-5xl">Almuni Interview</h1>
               {
                    interviewData.map((data, i) => 
                    <div key={i} className="lg:flex gap-5 items-center">
                        <div className="lg:w-1/2">
                            <img className='w-full' src={data.photo} alt="" />
                        </div>
                        <div className="lg:w-1/2 px-4">
                            <h1 className='text-5xl py-4'>{data.name}</h1>
                            <p className='text-md tracking-wider text-slate-400 pb-14'>{data.comment}</p>
                            <button className='btn font-thin tracking-widest text-xl border-warning border-[3px] px-4 py-3 h-auto bg-white capitalize rounded-none text-black hover:bg-warning hover:border-warning'>see {data.name} story</button>
                        </div>
                    </div>)
               }
            </div>
        </div>
    );
};

export default Interviews;