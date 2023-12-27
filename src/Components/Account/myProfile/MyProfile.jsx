/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/Context';
import toast from 'react-hot-toast';

const MyProfile = () => {
    useEffect(() => { window.scrollTo(0, 0) }, []);
    const [alreadyUser, setAlreadyUser] = useState('');
    const [already, setAlready] = useState(false);
    const [username, setUsername] = useState();

    const { userInfo } = useContext(AuthContext);

    const { data: profile = [], refetch } = useQuery({
        queryKey: ['profile', userInfo?.email],
        queryFn: async () => {
            const res = await fetch(`https://back-end-bice-eight.vercel.app/users/${userInfo?.email}`);
            const data = await res.json();
            return data;
        }
    });

    useEffect(() => {
        if (username) {
            fetch("https://back-end-bice-eight.vercel.app/users")
                .then(res => res.json())
                .then(data => {
                    if (data.find(userCheck => userCheck.userID == username)) {
                        setAlready(true)
                    } else {
                        setAlready(false)
                    }
                })
        }
    }, [username])

    const changeUserId = (e) => {
        e.preventDefault();

        const userID = e.target.userID.value;
        const user = {
            userID
        }
        if (already) {
            setAlreadyUser("This User Already Exist");
        } else {
            setAlreadyUser('')
            console.log(userID);

            fetch(`https://back-end-bice-eight.vercel.app/users/${profile._id}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        refetch()
                        toast.success("Your User ID Updated");
                        document.getElementById('userClose').click();
                    }
                })
        }
    }

    return (
        <div className='container mx-auto px-4 lg:px-6'>
            <div className="pt-40 pb-8">
                <div className="flex justify-between items-center pb-12">
                    <h1 className='text-slate-700 text-2xl'>Personal Details</h1>
                    <Link to={"/my-profile/edit"} className='btn btn-sm gap-4 font-light uppercase btn-success text-white'><span>Edit</span><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" className='fill-white' viewBox="0 0 512 512"><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" /></svg></Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
                    <div className="py-1">
                        <p>First Name:</p>
                        <p className="text-lg text-slate-500 font-thin capitalize py-3">{profile?.firstName ? profile.firstName : "N/A"}</p>
                    </div>
                    <div className="py-1">
                        <p>Last Name:</p>
                        <p className="text-lg text-slate-500 font-thin capitalize py-3">{profile?.lastName ? profile.lastName : "N/A"}</p>
                    </div>
                    <div className="py-1">
                        <p>Father'sName:</p>
                        <p className="text-lg text-slate-500 font-thin capitalize py-3">{profile?.fatherName ? profile.fatherName : "N/A"}</p>
                    </div>
                    <div className="py-1">
                        <p>Mother's Name:</p>
                        <p className="text-lg text-slate-500 font-thin capitalize py-3">{profile?.motherName ? profile.motherName : "N/A"}</p>
                    </div>
                    <div className="py-1">
                        <p>Date Of Birth</p>
                        <p className="text-lg text-slate-500 font-thin capitalize py-3">{profile?.dob ? profile.dob : "N/A"}</p>
                    </div>
                    <div className="py-1">
                        <p>Gender</p>
                        <p className="text-lg text-slate-500 font-thin capitalize py-3">{profile?.sex ? profile.sex : "N/A"}</p>
                    </div>
                    <div className="py-1">
                        <p>Religion</p>
                        <p className="text-lg text-slate-500 font-thin capitalize py-3">{profile?.religion ? profile.religion : "N/A"}</p>
                    </div>
                    <div className="py-1">
                        <p>Marital Status</p>
                        <p className="text-lg text-slate-500 font-thin capitalize py-3">{profile?.marriage ? profile.marriage : "N/A"}</p>
                    </div>
                    <div className="py-1">
                        <p>Nationality</p>
                        <p className="text-lg text-slate-500 font-thin capitalize py-3">{profile?.nation ? profile.nation : "N/A"}</p>
                    </div>
                    <div className="py-1">
                        <p>National ID</p>
                        <p className="text-lg text-slate-500 font-thin capitalize py-3">{profile?.nid ? profile.nid : "N/A"}</p>
                    </div>
                    <div className="py-1">
                        <p>Passport Number</p>
                        <p className="text-lg text-slate-500 font-thin capitalize py-3">{profile?.passportNumber ? profile.passportNumber : "N/A"}</p>
                    </div>
                    <div className="py-1">
                        <p>Passport Issue Date</p>
                        <p className="text-lg text-slate-500 font-thin capitalize py-3">{profile?.passportIssueDate ? profile.passportIssueDate : "N/A"}</p>
                    </div>
                    <div className="py-1">
                        <p>Primary Mobile</p>
                        <p className='text-green-500 text-xs'>(Provide at least one phone number)</p>
                        <Link onClick={() => document.getElementById('userId').showModal()} className='text-blue-500 font-semibold text-sm'>+ Change User ID</Link>
                        <dialog id="userId" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" id='userClose'>✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Change Your User ID</h3>
                                <div className="py-4">
                                    <form onSubmit={changeUserId} className='form-control'>
                                        {
                                            profile?.userID && <div className="py-1">
                                                <label htmlFor="currentUser" className='label pb-2'>Current User ID</label>
                                                <input type="text" id='currentUser' defaultValue={profile?.userID} readOnly className='input input-bordered rounded-none w-full h-10' />
                                            </div>
                                        }
                                        <div className="py-1">
                                            <label htmlFor="newUser" className='label pb-2'>New User ID</label>
                                            <input type="text" id='newUser' name='userID' onChange={(e) => setUsername(e.target.value)} className='input input-bordered rounded-none w-full h-10' required />
                                            <p className='text-red-500 text-sm font-thin tracking-widest pt-3'>{alreadyUser}</p>
                                        </div>
                                        <div className="pt-5">
                                            <button className='btn btn-sm rounded-none text-white tracking-wider font-thin btn-success w-20'>Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                        <p className="text-lg text-slate-500 font-thin capitalize py-3">+{profile?.phoneNumber ? profile.phoneNumber : "N/A"}</p>
                    </div>
                    <div className="py-1">
                        <p>Secondary Mobile</p>
                        <p className="text-lg text-slate-500 font-thin capitalize py-3">{profile?.secondNumber ? profile.secondNumber : "N/A"}</p>
                    </div>
                    <div className="py-1">
                        <p>Primary Email</p>
                        <p className="text-lg text-slate-500 font-thin lowercase py-3">{profile?.email ? profile.email : "N/A"}</p>
                    </div>
                    <div className="py-1">
                        <p>Alternate Email</p>
                        <p className="text-lg text-slate-500 font-thin lowercase py-3">{profile?.altEmail ? profile.altEmail : "N/A"}</p>
                    </div>
                    <div className="py-1">
                        <p>Blood Group</p>
                        <p className="text-lg text-slate-500 font-thin capitalize py-3">{profile?.blood ? profile.blood : "N/A"}</p>
                    </div>
                    <div className="py-1">
                        <p>Height</p>
                        <p className="text-lg text-slate-500 font-thin capitalize py-3">{profile?.height ? profile.height : "N/A"}</p>
                    </div>
                    <div className="py-1">
                        <p>Weight</p>
                        <p className="text-lg text-slate-500 font-thin capitalize py-3">{profile?.weight ? profile.weight : "N/A"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;