/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const JobAndCircular = ({ setIndex1 }) => {
    useEffect(() => { window.scrollTo(0, 0) }, []);

    const { register, handleSubmit } = useForm();
    const [avatar, setAvatar] = useState();
    const [preview, setPreview] = useState();
    const [index2, setIndex2] = useState(0);

    const { data: jobs = [], refetch } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const res = await fetch("http://localhost:3000/jobs");
            const data = await res.json();
            return data;
        }
    });

    const addJob = (data, e) => {
        const title = data.title;
        const details = data.details;
        const salary = data.salary;
        const workTIme = data.workTIme;
        const remote = data.remote;
        const type = data.type;
        const location = data.location;
        const company = data.company;
        const aboutCompany = data.aboutCompany;
        const link = data.link;
        const skillsDetails = data.skillsDetails;
        const established = data.established;

        const photo = new FormData();
        photo.append('file', avatar)
        photo.append('upload_preset', 'photoupload')
        photo.append('cloud_name', 'dnhefldpl')

        fetch('https://api.cloudinary.com/v1_1/dnhefldpl/image/upload', {
            method: 'post',
            body: photo
        })
            .then(res => res.json())
            .then(data => {
                if (data.url) {
                    const jobNews = {
                        title,
                        details,
                        salary,
                        tags: { workTIme, remote, type },
                        location,
                        company,
                        aboutCompany,
                        link,
                        skillsDetails,
                        established,
                        logo: data.url
                    }

                    fetch('http://localhost:3000/add-job-news', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(jobNews)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success(`Job Successfully Added`);
                                refetch();
                                e.target.reset();
                                document.getElementById('close').click();
                            }
                        })
                }
            })
    }

    const deleteJob = (id) => {
        const confirm = window.confirm("Are You Sure to Delete That Job ?");
        if (confirm) {
            fetch(`http://localhost:3000/jobs/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success("Job Deleted Successfully");
                        refetch()
                    }
                })
        }
    }

    return (
        <div className='container mx-auto px-5 lg:px-10'>
            <div className={`py-5 z-[${index2}]`} onClick={() => { setIndex1(0), setIndex2(200) }}>
                <h1 className='text-xl text-slate-700 font-semibold'>Job News & Circular</h1>
                <div className="py-4 sticky">
                    <div className={`overflow-x-auto border rounded-lg shadow mb-7 z-[${index2}]`}>
                        <table className={`table table-xs table-pin-rows table-pin-cols overflow-hidden border-t rounded-lg z-[${index2}]`} onClick={() => { setIndex2(250), setIndex1(0) }} onBlur={() => setIndex1(0)}>
                            <thead>
                                <tr className='py-5'>
                                    <td className='bg-primary/90 text-white text-[17px] font-normal py-3 px-8'>Logo</td>
                                    <td className='bg-primary/90 text-white text-[17px] font-normal py-3'>Company Name</td>
                                    <td className='bg-primary/90 text-white text-[17px] font-normal py-3'>Job Title</td>
                                    <td className='bg-primary/90 text-white text-[17px] font-normal py-3'>About</td>
                                    <td className='bg-primary/90 text-white text-[17px] font-normal py-3'>Website Link</td>
                                    <td className='bg-primary/90 text-white text-[17px] font-normal py-3'>Location</td>
                                    <td className='bg-primary/90 text-white text-[17px] font-normal py-3'>Since</td>
                                    <td className='bg-primary/90 text-white text-[17px] font-normal py-3'>Job Details</td>
                                    <td className='bg-primary/90 text-white text-[17px] font-normal py-3'>Salary</td>
                                    <td className='bg-primary/90 text-white text-[17px] font-normal py-3'>Tags</td>
                                    <td className='bg-primary/90 text-white text-[17px] font-normal py-3'>Questions</td>
                                    <td className='bg-primary/90 text-white text-[17px] font-normal py-3'>Skills</td>
                                    <td className='bg-primary/90 text-white text-[17px] font-normal py-3'>Skills Details</td>
                                    <td className='bg-primary/90 text-white text-[17px] font-normal py-3 px-8 text-center'>
                                        Action
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    jobs.map((job, i) => <tr key={i}>
                                        <td className='py-2 text-[13px]'>
                                            <img className="w-52 md:w-32 rounded-md" src={job?.logo} alt={job?.company} />
                                        </td>
                                        <td className='py-2 text-[14px] capitalize'>{job?.company}</td>
                                        <td className='py-2 text-[14px] capitalize'>{job?.title}</td>
                                        <td className='py-2 text-[14px] capitalize'>{job?.aboutCompany.substring(0, 50)}</td>
                                        <td className='py-2 text-[14px]'>{job?.link}</td>
                                        <td className='py-2 text-[14px] capitalize'>{job?.location}</td>
                                        <td className='py-2 text-[14px] capitalize'>{job?.established}</td>
                                        <td className='py-2 text-[14px] capitalize'>{job?.details.substring(0, 50)}</td>
                                        <td className='py-2 text-[14px] capitalize'>$ {job?.salary}</td>
                                        <td className='py-2 text-[14px] capitalize'>{job?.tags.workTIme}, {job?.tags.remote}, {job?.tags.type}</td>
                                        <td className='py-2 text-[14px]'>Question will be here</td>
                                        <td className='py-2 text-[14px]'>skills will be here</td>
                                        <td className='py-2 text-[14px]'>{job?.skillsDetails.substring(0, 50)}</td>
                                        <td className='py-2 text-[13px] px-5 text-center'> <button className='btn btn-sm btn-ghost btn-circle' onClick={() => deleteJob(job._id)}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" className='fill-red-800' viewBox="0 0 448 512"><path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" /></svg></button></td>
                                    </tr>).reverse()
                                }
                            </tbody>
                        </table>
                    </div>
                    <button onClick={() => document.getElementById('job').showModal()} className='btn btn-warning rounded-none font-thin text-white tracking-widest h-4 z-[140] sticky'>Add Jobs</button>
                    <dialog id="job" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button id='close' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Add Job</h3>
                            <form onSubmit={handleSubmit(addJob)} className='form-control'>
                                <div className="py-2">
                                    <label htmlFor="title" className='label'>Title</label>
                                    <input id='title' name='title' {...register("title", { required: true })} className='input input-bordered rounded-none w-full h-10' type="text" />
                                </div>
                                <div className="py-2">
                                    <label htmlFor="details" className='label'>Job Details</label>
                                    <textarea id='details' name='details' {...register("details", { required: true })} className='textarea textarea-bordered rounded-none w-full h-20' type="text" />
                                </div>
                                <div className="py-2">
                                    <label htmlFor="salary" className='label'>Salary</label>
                                    <input id='salary' name='salary' {...register("salary", { required: true })} className='input input-bordered rounded-none w-full h-10' type="number" />
                                </div>
                                <div className="py-2">
                                    <label htmlFor="tags" className='label'>Tags</label>
                                    <select className='select select-bordered select-sm rounded-none w-full mb-3' name="workTime" id="tags" defaultValue={"Select"} {...register("workTIme")}>
                                        <option disabled>Select</option>
                                        <option value="Full Time">Full Time</option>
                                        <option value="Full Time">Half Time</option>
                                        <option value="Full Time">Part Time</option>
                                    </select>
                                    <select className='select select-bordered select-sm rounded-none w-full mb-3' name="remote" id="remote" defaultValue={"Select"} {...register("remote")}>
                                        <option disabled>Select</option>
                                        <option value="Remote">Remote Job</option>
                                        <option value="Non Remote">Non Remote Job</option>
                                    </select>
                                    <select className='select select-bordered select-sm rounded-none w-full mb-3' name="type" id="type" defaultValue={"Select"} {...register("type")}>
                                        <option disabled>Select</option>
                                        <option value="Research">Researcher</option>
                                        <option value="Developer">Developer</option>
                                        <option value="Designer">Designer</option>
                                    </select>
                                </div>
                                <div className="py-2">
                                    <label htmlFor="location" className='label'>Location</label>
                                    <input id='location' name='location' {...register("location", { required: true })} className='input input-bordered rounded-none w-full h-10' type="text" />
                                </div>
                                <div className="py-2">
                                    <label htmlFor="company" className='label'>Company Name</label>
                                    <input id='company' name='company' {...register("company", { required: true })} className='input input-bordered rounded-none w-full h-10' type="text" />
                                </div>
                                <div className="py-2">
                                    <label htmlFor="aboutCompany" className='label'>About Of Company</label>
                                    <textarea id='aboutCompany' name='aboutCompany' {...register("aboutCompany", { required: true })} className='textarea textarea-bordered rounded-none w-full h-16' type="text" />
                                </div>
                                <div className="py-2">
                                    <label htmlFor="link" className='label'>Website Link</label>
                                    <input id='link' name='link' {...register("link")} className='input input-bordered rounded-none w-full h-10' type="text" />
                                </div>
                                <div className="py-2">
                                    <label htmlFor="skillsDetails" className='label'>Experiences Details</label>
                                    <textarea id='skillsDetails' name='skillsDetails' {...register("skillsDetails", { required: true })} className='textarea textarea-bordered rounded-none w-full h-16' type="text" />
                                </div>
                                <div className="py-2">
                                    <label htmlFor="established" className='label'>Established Since</label>
                                    <input id='established' name='established' {...register("established")} className='input input-bordered rounded-none w-full h-10' type="date" />
                                </div>
                                <div className="py-2">
                                    <label htmlFor="logo" className='label'>Company Logo <sub>( Image Size Must Be Squire )</sub></label>
                                    <div className="border border-dashed border-slate-400 rounded-md flex flex-col items-center justify-center overflow-hidden h-44 w-44 p-1" onClick={() => document.querySelector('.photo').click()}>
                                        <input onChange={(e) => {
                                            setAvatar(e.target.files[0]);
                                            setPreview(URL.createObjectURL(e.target.files[0]));
                                        }} type="file" name="doctor-image" id="logo" draggable='true' className='photo' hidden />
                                        {
                                            avatar ? <img className='w-24 h-24 rounded-md' src={preview} alt='Doctor' /> : <>
                                                <p className='text-slate-400'>Upload Slider Photo</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.75 9.6875C7.88705 9.6875 7.1875 10.387 7.1875 11.25C7.1875 12.1129 7.88705 12.8125 8.75 12.8125C9.61295 12.8125 10.3125 12.1129 10.3125 11.25C10.3125 10.387 9.61295 9.6875 8.75 9.6875ZM5.3125 11.25C5.3125 9.35153 6.85153 7.8125 8.75 7.8125C10.6485 7.8125 12.1875 9.35153 12.1875 11.25C12.1875 13.1485 10.6485 14.6875 8.75 14.6875C6.85153 14.6875 5.3125 13.1485 5.3125 11.25Z" fill="#9E9C9C" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.6825 19.5059C11.1203 21.2553 9.49096 23.648 7.7684 26.7098C7.51451 27.161 6.94289 27.321 6.49164 27.0671C6.04039 26.8131 5.8804 26.2416 6.13428 25.7904C7.89296 22.6645 9.59805 20.1448 11.2839 18.257C12.9655 16.3739 14.6736 15.068 16.4492 14.4531C18.259 13.8264 20.066 13.9438 21.8476 14.7743C23.598 15.5901 25.2939 17.0785 26.9781 19.1451C27.3051 19.5465 27.245 20.1371 26.8436 20.4641C26.4422 20.7913 25.8517 20.731 25.5246 20.3296C23.9339 18.3776 22.45 17.1238 21.0555 16.4736C19.6922 15.8383 18.389 15.7656 17.0629 16.2249C15.7025 16.696 14.2489 17.7519 12.6825 19.5059Z" fill="#9E9C9C" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.05155 4.55148C3.16508 3.43795 4.67531 2.8125 6.25 2.8125H15.35C15.8678 2.8125 16.2875 3.23224 16.2875 3.75C16.2875 4.26776 15.8678 4.6875 15.35 4.6875H6.25C5.17253 4.6875 4.13921 5.11546 3.37738 5.8773C2.61553 6.63915 2.1875 7.67254 2.1875 8.75V21.25C2.1875 22.3274 2.6155 23.3606 3.37738 24.1225C4.13926 24.8845 5.17259 25.3125 6.25 25.3125H21.25C22.3274 25.3125 23.3608 24.8845 24.1226 24.1225C24.8845 23.3606 25.3125 22.3274 25.3125 21.25V15C25.3125 14.4823 25.7323 14.0625 26.25 14.0625C26.7678 14.0625 27.1875 14.4823 27.1875 15V21.25C27.1875 22.8247 26.562 24.3349 25.4485 25.4484C24.335 26.5619 22.8248 27.1875 21.25 27.1875H6.25C4.67524 27.1875 3.16503 26.5619 2.05155 25.4484C0.938061 24.3349 0.3125 22.8247 0.3125 21.25V8.75C0.3125 7.1753 0.93804 5.66499 2.05155 4.55148Z" fill="#9E9C9C" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M23.4375 0.0999451C23.9553 0.0999451 24.375 0.519677 24.375 1.03744V11.0374C24.375 11.5552 23.9553 11.9749 23.4375 11.9749C22.9197 11.9749 22.5 11.5552 22.5 11.0374V1.03744C22.5 0.519677 22.9197 0.0999451 23.4375 0.0999451Z" fill="#9E9C9C" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M22.7756 0.374531C23.1417 0.00841633 23.7352 0.00841633 24.1013 0.374531L28.1013 4.37454C28.4674 4.74065 28.4674 5.33424 28.1013 5.70036C27.7352 6.06648 27.1417 6.06648 26.7756 5.70036L23.4384 2.36326L20.1013 5.70036C19.7352 6.06648 19.1416 6.06648 18.7756 5.70036C18.4094 5.33424 18.4094 4.74065 18.7756 4.37454L22.7756 0.374531Z" fill="#9E9C9C" />
                                                </svg>
                                            </>
                                        }
                                    </div>
                                </div>
                                <button className='btn btn-warning text-white btn-sm rounded-none font-thin'>Post</button>
                            </form>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default JobAndCircular;