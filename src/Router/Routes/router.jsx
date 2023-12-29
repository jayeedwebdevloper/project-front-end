/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../Layout/Layout';
import Home from '../../Components/Home/Home';
import Register from '../../Components/Account/SignUp/Register';
import MyProfile from '../../Components/Account/myProfile/MyProfile';
import EditProfile from '../../Components/Account/myProfile/EditProfile/EditProfile';
import Login from '../../Components/Account/Login/Login';
import ExecutiveCommitee from '../../Components/Organization/ExecutiveCommitee/ExecutiveCommitee';
import PastLeaders from '../../Components/Organization/PastLeaders/PastLeaders';
import AAPTECMember from '../../Components/Organization/AAPTECMember/AAPTECMember';
import Constitution from '../../Components/Organization/Constitution/Constitution';
import EventRegistration from '../../Components/EventAndNews/EventRegistration/EventRegistration';
import UpcomingProgram from '../../Components/EventAndNews/UpcomingProgram/UpcomingProgram';
import CurrentEvent from '../../Components/EventAndNews/CurrentEvent/CurrentEvent';
import PastEvent from '../../Components/EventAndNews/PastEvent/PastEvent';
import Contact from '../../Components/About/Contact/Contact';
import About from '../../Components/About/About/About';
import PrivateRouter from '../PrivateRouter/PrivateRouter';
import Dashboard from '../../Layout/Dashboard';
import NewsAndNotice from '../../Components/DashboardPages/News/NewsAndNotice';
import Slider from '../../Components/DashboardPages/Slider/Slider';
import JobAndCircular from '../../Components/DashboardPages/Job/JobAndCircular';
import SocialNetwork from '../../Components/DashboardPages/SocialNetwork/SocialNetwork';
import EventCalender from '../../Components/DashboardPages/Event/EventCalender/EventCalender';
import Interview from '../../Components/DashboardPages/Interview/Interview';
import NewsData from '../../Components/DashboardPages/News/NewsData/NewsData';
import NewsPage from '../../Components/NewsPage/NewsPage';
import News from '../../Components/NewsPage/SingleNews/News';
import JobNewsPage from '../../Components/JobNewsPage/JobNewsPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/organization/executive-committee',
                element: <ExecutiveCommitee></ExecutiveCommitee>
            },
            {
                path: '/organization/past-leaders',
                element: <PastLeaders></PastLeaders>
            },
            {
                path: '/organization/aaptec-member',
                element: <AAPTECMember></AAPTECMember>
            },
            {
                path: '/organization/constitution',
                element: <Constitution></Constitution>
            },
            {
                path: '/event-registration',
                element: <EventRegistration />
            },
            {
                path: '/upcoming-program',
                element: <UpcomingProgram></UpcomingProgram>
            },
            {
                path: '/current-event',
                element: <CurrentEvent></CurrentEvent>
            },
            {
                path: '/past-event',
                element: <PastEvent></PastEvent>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/all-news',
                element: <NewsPage></NewsPage>
            },
            {
                path: '/all-jobs',
                element: <JobNewsPage></JobNewsPage>
            },
            {
                path: '/news/:newsId',
                loader: ({params}) => fetch(`http://localhost:3000/news/${params.newsId}`),
                element: <News></News>
            },
            {
                path: '/jobs/:jobsId',
                loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.jobsId}`),
                element: <News></News>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/my-profile',
                element: <PrivateRouter><MyProfile></MyProfile></PrivateRouter>
            },
            {
                path: '/my-profile/edit',
                element: <EditProfile></EditProfile>
            },
        ]
    },
    {
        path: '/dashboard876admingo',
        element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
        children: [
            {
                path: '/dashboard876admingo',
                element: <Slider></Slider>
            },
            {
                path: '/dashboard876admingo/add-news',
                element: <NewsAndNotice></NewsAndNotice>
            },
            {
                path: '/dashboard876admingo/slider',
                element: <Slider></Slider>
            },
            {
                path: '/dashboard876admingo/interview',
                element: <Interview></Interview>
            },
            {
                path: '/dashboard876admingo/job-news-circular',
                element: <JobAndCircular></JobAndCircular>
            },
            {
                path: '/dashboard876admingo/add-social',
                element: <SocialNetwork></SocialNetwork>
            },
            {
                path: '/dashboard876admingo/event-calender',
                element: <EventCalender></EventCalender>
            },
        ]
    }
])

export default router;