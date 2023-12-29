/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const SocialNetwork = ({ setIndex1 }) => {
    useEffect(() => { window.scrollTo(0, 0) }, []);

    const { register, handleSubmit } = useForm();
    const [index2, setIndex2] = useState(0);

    const { data: social = [], refetch } = useQuery({
        queryKey: ['social'],
        queryFn: async () => {
            const res = await fetch("https://back-end-bice-eight.vercel.app/social");
            const data = await res.json();
            return data;
        }
    });

    const addSocial = (data, e) => {
        const social = data.social;
        const link = data.link;

        const socialLink = {
            social, link
        }

        fetch("https://back-end-bice-eight.vercel.app/add-social", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(socialLink)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Social Link Added");
                    refetch();
                    document.getElementById("close").click();
                    e.target.reset();
                }
            })

    }

    const deleteSocial = (id) => {
        const confirm = window.confirm("Are You Sure to Delete That Slide ?");
        if (confirm) {
            fetch(`https://back-end-bice-eight.vercel.app/delete-social/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success("Slide Deleted Successfully");
                        refetch()
                    }
                })
        }
    }

    return (
        <div className='container mx-auto px-5 lg:px-10'>
            <div className={`py-5 z-[${index2}]`} onClick={() => { setIndex1(0), setIndex2(100) }}>
                <h1 className='text-xl text-slate-700 font-semibold'>Social Media Links</h1>
                <div className="py-4 sticky">
                    <div className="overflow-x-auto border rounded-lg shadow mb-7">
                        <table className={`table table-xs table-pin-rows table-pin-cols overflow-hidden border-t rounded-lg z-[${index2}]`} onClick={() => { setIndex2(150), setIndex1(0) }} onBlur={() => setIndex2(0)}>
                            <thead>
                                <tr className='py-5'>
                                    <td className='bg-primary/90 text-white text-[17px] font-normal py-3'>Media Name</td>
                                    <td className='bg-primary/90 text-white text-[17px] font-normal py-3'>Link</td>
                                    <td className='bg-primary/90 text-white text-[17px] font-normal py-3 px-8 text-center'>
                                        Action
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    social.map((media, i) => <tr key={i}>
                                        <td className='py-2 text-[14px] capitalize'>{media?.social}</td>
                                        <td className='py-2 text-[14px] lowercase'>{media?.link}</td>
                                        <td className='py-2 text-[13px] px-5 text-center'> <button className='btn btn-sm btn-ghost btn-circle' onClick={() => deleteSocial(media._id)}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" className='fill-red-800' viewBox="0 0 448 512"><path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" /></svg></button></td>
                                    </tr>).reverse()
                                }
                            </tbody>
                        </table>
                    </div>
                    <button onClick={() => document.getElementById('slide').showModal()} className='btn btn-warning rounded-none font-thin text-white tracking-widest h-4 z-[140] sticky'>Add Social</button>
                    <dialog id="slide" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button id='close' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Add Social Link</h3>
                            <form onSubmit={handleSubmit(addSocial)} className='form-control'>
                                <div className="py-2">
                                    <label htmlFor="title" className='label'>Provider</label>
                                    <select className='select select-sm select-bordered rounded-none w-full' name="social" id="title" defaultValue={"Select"} {...register("social")}>
                                        <option disabled>Select</option>
                                        <option value="Facebook">Facebook</option>
                                        <option value="Twitter">Twitter</option>
                                        <option value="Instagram">Instagram</option>
                                        <option value="Youtube">Youtube</option>
                                        <option value="Google">Google</option>
                                        <option value="LinkedIn">LinkedIn</option>
                                    </select>
                                </div>
                                <div className="py-2">
                                    <label htmlFor="link" className='label'>Profile Link</label>
                                    <input id='link' name='link' {...register("link")} className='input input-bordered rounded-none w-full h-10' placeholder='https://facebook.com/profile' type="text" />
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

export default SocialNetwork;