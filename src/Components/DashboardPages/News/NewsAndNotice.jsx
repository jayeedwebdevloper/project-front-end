/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import NewsData from './NewsData/NewsData';
import NoticeData from './NoticeData/NoticeData';

const NewsAndNotice = ({ setIndex1 }) => {
    useEffect(() => { window.scrollTo(0, 0) }, []);

    return (
        <div>
            <NewsData setIndex1={setIndex1}></NewsData>
            <NoticeData setIndex1={setIndex1}></NoticeData>
        </div>
    );
};

export default NewsAndNotice;