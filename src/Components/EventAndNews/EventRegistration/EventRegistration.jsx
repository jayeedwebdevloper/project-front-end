/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

const EventRegistration = () => {
    useEffect(() => {window.scrollTo(0,0)}, []);
    return (
        <div className='container mx-auto px-4 lg:px-6'>
            <div className="pt-40 pb-8">
                <h1 className='text-center text-slate-700 text-2xl pb-8 font-light'>Event Registration</h1>
            </div>
        </div>
    );
};

export default EventRegistration;