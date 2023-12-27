/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const { register, handleSubmit } = useForm();

    const sendMessage = (data) => {
        const name = data.fullName;
        const phone = data.phoneNumber;
        const email = data.email;
        const additional = data.additionalInformation;

        const messageBox = {
            name, phone, email, additional
        }

        console.log(messageBox);
    }

    return (
        <div className='pt-8 pb-12 px-4 w-full md:w-4/5 lg:w-3/4 mx-auto'>
            <h1 className='text-4xl text-slate-600 font-thin tracking-widest pb-5'>We'd love to hear from you</h1>
            <form onSubmit={handleSubmit(sendMessage)} className="form-control">
                <input type="text" placeholder='Full Name' {...register("fullName")} required className='input input-bordered rounded-none focus:border-warning focus:outline-warning' />
                <input type="number" placeholder='Phone Number' {...register("phoneNumber")} required className='input input-bordered rounded-none my-5 focus:border-warning focus:outline-warning' />
                <input type="email" placeholder='Email Address' {...register("email")} required className='input input-bordered rounded-none focus:border-warning focus:outline-warning' />
                <input type="text" placeholder='Additional Information' {...register("additionalInformation")} required className='input input-bordered rounded-none my-5 focus:border-warning focus:outline-warning' />
                <div className="flex md:justify-end justify-center">
                    <button className='text-xl btn btn-warning h-auto py-3 rounded-none font-thin tracking-widest uppercase px-7 text-white'>Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;