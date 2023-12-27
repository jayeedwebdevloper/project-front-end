/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import NewsData from './NewsData/NewsData';
import NoticeData from './NoticeData/NoticeData';

const NewsAndNotice = () => {
    useEffect(() => { window.scrollTo(0, 0) }, []);

    return (
        <>
            <NewsData></NewsData>
            <NoticeData></NoticeData>
        </>
    );
};

export default NewsAndNotice;