/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
    useEffect(() => { window.scrollTo(0, 0) }, []);

    const locationData = [{
        locationMain: "Riga 3839, Vilku Pagasts, Latvia 57766. Office : Monday to Friday: 10am to 7pm",
        phone: "+1 9009 23456789",
        email: "info@kenzap.com",
        mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46788.35593528694!2d74.6061824!3d42.867097599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9a0360ea95b%3A0x1484f7504c9ac9b4!2sNovotel%20Bishkek%20City%20Center!5e0!3m2!1sen!2skg!4v1702822129526!5m2!1sen!2skg"
    }]

    return (
        <div className='container mx-auto px-4 lg:px-6'>
            <div className="pt-40 pb-8">
                <div className="location">
                    {
                        locationData.map((location, i) => <iframe key={i} src={location.mapLink} allowFullScreen className='w-full h-[450px] border border-slate-300 p-1 shadow-md' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>)
                    }
                </div>
                <div className="px-8 md:px-52 py-14">
                    <div className="flex flex-col md:flex-row gap-5 justify-between">
                        <div className="w-full lg:w-1/2">
                            <h1 className='text-3xl tracking-widest font-light pb-8'>Visit Us</h1>
                            <p className='text-xl tracking-wider font-extralight'>{
                                locationData.map((location) => location.locationMain)
                            }</p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h1 className='text-3xl tracking-widest font-light pb-8'>Get in touch</h1>
                            {
                                locationData.map((location, i) => <div key={i}>
                                    <p className='text-xl tracking-wider font-thin'>
                                        Tel: {location.phone}</p>
                                    <p className='text-xl tracking-wider font-thin pt-3'>Email: {location.email}</p>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default Contact;