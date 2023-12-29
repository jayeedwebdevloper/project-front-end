/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';

const Slider = () => {
    const { data: sliders = [] } = useQuery({
        queryKey: ['sliders'],
        queryFn: async () => {
            const res = await fetch("https://back-end-bice-eight.vercel.app/slider");
            const data = await res.json();
            return data;
        }
    });

    return (
        <div className="lg:mt-16 mt-40">
            <Carousel autoPlay infiniteLoop swipeable>
                {
                    sliders.map((slider, i) =>
                        <div className="relative h-60 sm:h-max" key={i}>
                            <img className='h-full object-cover' src={slider.sliderImage} />
                            <div className='absolute left-[50%] right-[50%] -translate-x-1/2 top-1/2 -translate-y-1/2 w-full h-max'>
                                <h1 className="text-white text-xl md:text-4xl lg:text-7xl tracking-wider capitalize font-semibold">{slider.title}</h1>
                                <p className="text-white text-lg md:text-3xl lg:text-6xl tracking-wider capitalize font-thin py-4">{slider.caption}</p>
                                <Link to={slider.link} className='btn btn-sm md:btn-md btn-square btn-warning text-white md:mt-20 md:w-48 w-24 rounded-none md:text-xl mb-2'>Read Story</Link>
                            </div>
                        </div>)
                }
            </Carousel>
        </div>
    );
};

export default Slider;