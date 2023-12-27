/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    useEffect(() => { window.scrollTo(0, 0) }, []);

    const aboutData = [{
        paragraph: "Duihs autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Investigationes demonstraverunt lectores.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.",
        groupPhoto: "https://sayidan.kenzap.com/wp-content/uploads/2016/07/services-img-3.jpg",
        facebook: "almuni demo",
        instagram: "almuni demo",
        linkedin: "almuni demo",
        twitter: "almuni demo",
        professional: [
            "Feugiat nulla facilisis at vero eros et accumsan et iusto",
            "Luptatum zzril delenit augue duis dolore.",
            "Vulputate velit esse molestie consequat.",
            "Delenit augue duis dolore vulputate velit esse molestie consequat"
        ],
        intellectual: [
            "Feugiat nulla facilisis at vero eros et accumsan et iusto",
            "Luptatum zzril delenit augue duis dolore.",
            "Vulputate velit esse molestie consequat.",
            "Delenit augue duis dolore vulputate velit esse molestie consequat vulputate"
        ],
    }]

    return (
        <div className='about pt-32'>
            <div className="banner h-[500px] flex items-center justify-center">
                <h1 className='text-center text-white text-3xl lg:text-4xl font-bold tracking-widest'>About Us</h1>
            </div>
            <div className='container mx-auto px-4 lg:px-7'>
                {
                    aboutData.map((about, i) => <div key={i}>
                        <p className='px-3 md:px-8 text-justify pt-12 pb-8'>{about.paragraph}</p>
                        <div className="flex lg:flex-row flex-col gap-5 pt-8 justify-center">
                            <div className="w-full lg:w-1/2 px-4">
                                <img className='w-full' src={about.groupPhoto} alt="aaptec" />
                            </div>
                            <div className="w-full lg:w-1/2 px-4">
                                <div role="tablist" className="tabs w-full tabs-bordered">
                                    <input type="radio" name="my_tabs_1" role="tab" className="tab text-md hover:text-warning md:text-lg lg:px-8 h-12 tracking-wider" aria-label="Social"/>
                                    <div role="tabpanel" className="tab-content p-10">
                                        <div className="flex gap-5 py-3">
                                            <div className="h-8 w-8">
                                                <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg>
                                            </div>
                                            <Link>{about.facebook}</Link>
                                        </div>
                                        <div className="flex gap-5 py-3">
                                            <div className="h-8 w-8">
                                                <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="0 0 448 512"><path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" /></svg>
                                            </div>
                                            <Link>{about.instagram}</Link>
                                        </div>
                                        <div className="flex gap-5 py-3">
                                            <div className="h-8 w-8">
                                                <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                                            </div>
                                            <Link>{about.linkedin}</Link>
                                        </div>
                                        <div className="flex gap-5 py-3">
                                            <div className="h-8 w-8">
                                                <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg>
                                            </div>
                                            <Link>{about.twitter}</Link>
                                        </div>
                                    </div>

                                    <input type="radio" name="my_tabs_1" role="tab" className="tab text-md hover:text-warning md:text-lg lg:px-8 h-12 tracking-wider" aria-label="Professional" />
                                    <div role="tabpanel" className="tab-content p-10">
                                        <ul>
                                            {
                                                about.professional.map((profesion, i) => <li className='py-4 tracking-wider flex items-center gap-6' key={i}><div><svg xmlns="http://www.w3.org/2000/svg" className='fill-warning' height="16" width="14" viewBox="0 0 448 512"><path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z" /></svg></div><div>{profesion}</div></li>)
                                            }
                                        </ul>
                                    </div>

                                    <input type="radio" name="my_tabs_1" role="tab" className="tab text-md hover:text-warning md:text-lg lg:px-8 h-12 tracking-wider" aria-label="Intellectual" />
                                    <div role="tabpanel" className="tab-content p-10">
                                        <ul>
                                            {
                                                about.intellectual.map((intel, i) => <li className='py-4 tracking-wider flex items-center gap-6' key={i}><div><svg xmlns="http://www.w3.org/2000/svg" className='fill-warning' height="16" width="14" viewBox="0 0 448 512"><path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z" /></svg></div><div>{intel}</div></li>)
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

                <h1 className='text-center text-2xl lg:text-3xl font-semibold text-slate-600 pb-12 pt-14'>We are not just Friend, We are Family</h1>
                <p className='text-center text-lg tracking-wider pb-5'>uis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.</p>

                <img className='mx-auto pb-6' src="https://sayidan.kenzap.com/wp-content/uploads/2016/07/map-img-3.jpg" alt="" />
            </div>
        </div>
    );
};

export default About;