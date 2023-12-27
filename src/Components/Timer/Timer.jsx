/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Timer = ({ duration }) => {
    const [timer, setTimer] = useState(duration);

    useEffect(() => {
        setTimeout(() => {
            setTimer(timer - 1000)
        }, 1000)
    }, [timer]);

    const getTimer = (timerGet) => {
        let second = parseInt(Math.floor(timerGet / 1000));
        let minute = parseInt(Math.floor(second / 60));
        let hour = parseInt(Math.floor(minute / 60));
        let day = parseInt(Math.floor(hour / 24));

        let sec = parseInt(second % 60);
        let min = parseInt(minute % 60);
        let hr = parseInt(hour % 24);

        return `${day} : ${hr} : ${min} : ${sec}`
    }

    return (
        <div>
            {getTimer(timer)}
        </div>
    );
};

export default Timer;