/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Slider from './Slider/Slider';
import EventWedget from './EventWedget/EventWedget';
import Rolling from './Rolling/Rolling';
import Interviews from './Interviews/Interviews';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Slider></Slider>
            <EventWedget></EventWedget>
            <Rolling></Rolling>
            <Interviews></Interviews>
            <Subscribe></Subscribe>
        </>
    );
};

export default Home;