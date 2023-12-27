/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/Context';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const EditProfile = () => {
    useEffect(() => { window.scrollTo(0, 0) }, []);

    const { userInfo } = useContext(AuthContext);
    const navigate = useNavigate();

    const { data: profile = [], refetch } = useQuery({
        queryKey: ['profile', userInfo?.email],
        queryFn: async () => {
            const res = await fetch(`https://back-end-bice-eight.vercel.app/users/${userInfo?.email}`);
            const data = await res.json();
            return data;
        }
    });


    const profileUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const fatherName = form.fatherName.value;
        const motherName = form.motherName.value;
        const dob = form.dob.value;
        const sex = form.gender.value;
        const religion = form.religion.value;
        const marriage = form.marriage.value;
        const nation = form.nation.value;
        const nid = form.nid.value;
        const passportNumber = form.passportNumber.value;
        const passportIssueDate = form.passportIssueDate.value;
        const phoneNumber = form.phoneNumber.value;
        const secondNumber = form.secondNumber.value;
        const emergencyContact = form.emergencyContact.value;
        const email = form.email.value;
        const altEmail = form.altEmail.value;
        const blood = form.blood.value;
        const height = form.height.value;
        const weight = form.weight.value;

        const profileData = {
            firstName, lastName, fatherName, motherName, dob, sex, religion, marriage, nation, nid, passportNumber, passportIssueDate, phoneNumber, secondNumber, emergencyContact, email, altEmail, blood, height, weight
        }

        fetch(`https://back-end-bice-eight.vercel.app/users/p/${profile._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(profileData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    navigate('/my-profile')
                    toast.success("Your Profile Is Updated");
                }
            })
    }



    return (
        <div className='container mx-auto px-4 lg:px-6'>
            <div className="pt-40 pb-8">
                <h1 className='text-slate-700 text-2xl text-center pb-8'>Personal Details</h1>
                <form onSubmit={profileUpdate} className='form-control'>
                    <div className="gap-4 w-full lg:w-10/12 xl:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2">
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="fName" className="label">First Name</label> <p className='text-lg text-red-400'>*</p>
                            </div>
                            <input name='firstName' defaultValue={profile?.firstName} required type="text" id='fName' className='input input-bordered py-2 h-8 px-2 w-full focus:outline-slate-900' />
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="lName" className="label">Last Name</label> <p className='text-lg text-red-400'>*</p>
                            </div>
                            <input name='lastName' defaultValue={profile?.lastName} required type="text" id='lName' className='input input-bordered py-2 h-8 px-2 w-full focus:outline-slate-900' />
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="fatherName" className="label">Father's Name</label>
                            </div>
                            <input name='fatherName' defaultValue={profile?.fatherName} type="text" id='fatherName' className='input input-bordered py-2 h-8 px-2 w-full focus:outline-slate-900' />
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="motherName" className="label">Mother's Name</label>
                            </div>
                            <input name='motherName' defaultValue={profile?.motherName} type="text" id='motherName' className='input input-bordered py-2 h-8 px-2 w-full focus:outline-slate-900' />
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="birth" className="label">Date Of Birth</label> <p className='text-lg text-red-400'>*</p>
                            </div>
                            <input name='dob' defaultValue={profile?.dob} required type="date" id='birth' className='input input-bordered py-2 h-8 px-2 w-full focus:outline-slate-900' />
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="gender" className="label">Gender</label> <p className='text-lg text-red-400'>*</p>
                            </div>
                            <select name="gender" defaultValue={profile?.sex || "Select"} required id="gender" className='select select-bordered py-0 px-3 min-h-[33px] h-1 focus:outline-slate-900 w-full'>
                                <option>Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="religion" className="label">Religion</label>
                            </div>
                            <select name="religion" defaultValue={profile?.religion || "Select"} id="religion" className='select select-bordered py-0 px-3 min-h-[33px] h-1 focus:outline-slate-900 w-full'>
                                <option>Select</option>
                                <option value="Islam">Islam</option>
                                <option value="Hindu">Hindu</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="marriage" className="label">Marital Status</label> <p className='text-lg text-red-400'>*</p>
                            </div>
                            <select name="marriage" defaultValue={profile?.marriage || "Select"} id="marriage" required className='select select-bordered py-0 px-3 min-h-[33px] h-1 focus:outline-slate-900 w-full'>
                                <option>Select</option>
                                <option value="Married">Married</option>
                                <option value="Unmarried">Unmarried</option>
                            </select>
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-1'>
                                    <label htmlFor="nationality" className="label">Nationality</label> <p className='text-lg text-red-400'>*</p>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer gap-2">
                                        <input type="checkbox" checked disabled className="checkbox h-5 w-5 rounded-md" />
                                        <span className="label-text">Bangladeshi</span>
                                    </label>
                                </div>
                            </div>
                            <input name='nation' disabled defaultValue={profile?.nation || "Bangladeshi"} type="text" id='nationality' className='input input-bordered py-2 h-8 px-2 w-full focus:outline-slate-900' />
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="nid" className="label">National ID</label>
                            </div>
                            <input name='nid' defaultValue={profile?.nid} type="number" id='nid' className='input input-bordered py-2 h-8 px-2 w-full focus:outline-slate-900' />
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="passport" className="label">Passport Number</label>
                            </div>
                            <input name='passportNumber' defaultValue={profile?.passportNumber} type="text" id='passport' className='input input-bordered py-2 h-8 px-2 w-full focus:outline-slate-900' />
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="issueDate" className="label">Passport Issue Date</label>
                            </div>
                            <input name='passportIssueDate' defaultValue={profile?.passportIssueDate} type="date" id='issueDate' className='input input-bordered py-2 h-8 px-2 w-full focus:outline-slate-900' />
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="phoneP" className="label">Primary Phone Number</label> <p className='text-lg text-red-400'>*</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input name='phoneNumber' defaultValue={profile?.phoneNumber} required type="number" id='phoneP' className='input input-bordered py-2 h-8 px-2 w-full focus:outline-slate-900' />
                            </div>
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="phoneS" className="label">Secondary Phone Number (with country code)</label>
                            </div>
                            <input name='secondNumber' defaultValue={profile?.secondNumber} type="number" id='phoneS' className='input input-bordered py-2 h-8 px-2 w-full focus:outline-slate-900' />
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="eContact" className="label">Emergency Contact</label>
                            </div>
                            <input name='emergencyContact' defaultValue={profile?.emergencyContact} type="text" id='eContact' className='input input-bordered py-2 h-8 px-2 w-full focus:outline-slate-900' />
                        </div>
                        <div className='py-1'>
                            <div>
                                <label htmlFor="pEmail" className="label float-left">Primary Email</label> <p className='text-lg text-red-400 w-10/12'>* <span className='text-green-700 text-xs leading-0 m-0'>(Don't enter/provide more than one email address in either of the field)</span></p>
                            </div>
                            <input name='email' defaultValue={profile?.email} type="email" id='pEmail' required className='input input-bordered py-2 h-8 px-2 w-full focus:outline-slate-900' />
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="aEmail" className="label">Alternate Email</label>
                            </div>
                            <input name='altEmail' defaultValue={profile?.altEmail} type="email" id='aEmail' className='input input-bordered py-2 h-8 px-2 w-full focus:outline-slate-900' />
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="blood" className="label">Blood Group</label>
                            </div>
                            <select name="blood" defaultValue={profile?.blood || "Select"} id="blood" className='select select-bordered py-0 px-3 min-h-[33px] h-1 focus:outline-slate-900 w-full'>
                                <option>Select</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="height" className="label">Height (meter)</label>
                            </div>
                            <input name='height' defaultValue={profile?.height} type="number" id='height' className='input input-bordered py-2 h-8 px-2 w-full focus:outline-slate-900' />
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="weight" className="label">Weight (kg)</label>
                            </div>
                            <input name='weight' defaultValue={profile?.weight} type="number" id='weight' className='input input-bordered py-2 h-8 px-2 w-full focus:outline-slate-900' />
                        </div>
                        <div className="flex justify-start gap-5 py-8">
                            <button type='submit' className='btn btn-success font-light text-lg text-white rounded-none btn-md h-10 tracking-wider min-h-full'>Save</button>
                            <Link to={'/my-profile'} className='btn font-light text-lg rounded-none btn-md h-10 tracking-wider min-h-full bg-gray-300'>Close</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;