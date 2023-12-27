/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/Context';
import PhoneInput from 'react-phone-input-2';
import toast from 'react-hot-toast';

const Register = () => {
    useEffect(() => { window.scrollTo(0, 0) }, []);
    const [errorMessage, setErrorMessage] = useState('');
    const [alreadyUser, setAlreadyUser] = useState('');
    const [already, setAlready] = useState(false);
    const navigate = useNavigate();
    const { createAccount, googleLog, updateUser } = useContext(AuthContext);
    const [phone, setPhone] = useState();
    const [username, setUsername] = useState();
    const [otp, setOtp] = useState();
    const [sended, setSent] = useState(false);
    const [verified, setVerify] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

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



    const registerAccount = (data) => {
        const firstName = data.firstName;
        const lastName = data.lastName;
        const email = data.email;
        const password = data.password;
        const cPassword = data.confirmPassword;
        const phoneNumber = phone;


        if (password != cPassword) {
            setErrorMessage("Password Not Match");
        } else if (already) {
            setAlreadyUser("This User Already Exist"), setErrorMessage('');
        }
        else {
            setAlreadyUser('');
            const account = {
                firstName, lastName, userID: username, email, phoneNumber
            }
            const fullName = firstName + ' ' + lastName;
            createAccount(email, password)
                .then(result => {
                    const user = {
                        displayName: fullName
                    };
                    updateUser(user)
                        .then(() => {
                            fetch("https://back-end-bice-eight.vercel.app/set-user", {
                                method: "POST",
                                headers: {
                                    "content-type": "application/json"
                                },
                                body: JSON.stringify(account)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.acknowledged) {
                                        toast.success("Your Account Successfully Created, Now Please Update Your Profile")
                                        navigate('/my-profile')
                                    }
                                })
                        })
                }).catch(err =>
                    setErrorMessage(err.message)
                )
        }
    }

    const google = () => {
        googleLog()
            .then((result) => {
                const user = result.user;
                const account = {
                    photoURL: user.photoURL,
                    email: user.email,
                }
                fetch("https://back-end-bice-eight.vercel.app/set-user", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(account)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success("Your Account Successfully Created, Now Please Update Your Profile")
                            navigate('/my-profile')
                        }
                    })
            })
    }

    return (
        <div className='container mx-auto px-4 lg:px-6'>
            <div className="pt-40 pb-12">
                <h1 className='text-center text-2xl lg:text-3xl font-semibold text-slate-700 py-5'>Sign Up Your Account</h1>
                <form className='form-control' onSubmit={handleSubmit(registerAccount)}>
                    <div className="gap-4 w-full lg:w-[500px] mx-auto grid grid-cols-1">
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="username" className="label text-slate-800 font-semibold">Username</label> <p className='text-lg text-red-400'>*</p>
                            </div>
                            <input name='username' onChange={(e) => setUsername(e.target.value)} required type="text" id='username' className='input input-bordered py-2 h-10 px-2 w-full focus:outline-slate-900 rounded-none' />
                            {
                                alreadyUser && <p className='text-red-500 pt-2 text-xs tracking-widest font-semibold'>{alreadyUser}</p>
                            }
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="fName" className="label text-slate-800 font-semibold">First Name</label> <p className='text-lg text-red-400'>*</p>
                            </div>
                            <input name='fName' {...register("firstName", { required: true })} required type="text" id='fName' className='input input-bordered py-2 h-10 px-2 w-full focus:outline-slate-900 rounded-none' />
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="lName" className="label text-slate-800 font-semibold">Last Name</label> <p className='text-lg text-red-400'>*</p>
                            </div>
                            <input name='lName' {...register("lastName", { required: true })} required type="text" id='lName' className='input input-bordered py-2 h-10 px-2 w-full focus:outline-slate-900 rounded-none' />
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="pEmail" className="label text-slate-800 font-semibold">Email Address</label> <p className='text-lg text-red-400'>*</p>
                            </div>
                            <input type="email" {...register("email", { required: true })} id='pEmail' required className='input input-bordered py-2 h-10 px-2 w-full focus:outline-slate-900 rounded-none' />
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="phone" className="label text-slate-800 font-semibold">Phone Number</label> <p className='text-lg text-red-400'>*</p>
                            </div>
                            <PhoneInput
                                country={'bd'}
                                value={phone}
                                onChange={phone => setPhone(phone)}
                                countryCodeEditable={false}
                                autoFormat={true}
                                enableAreaCodes={true}
                                enableSearch={true}
                                id={"phone"}
                                className={"input input-bordered rounded-none px-0 py-0 flex items-center"}
                            />
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="pass" className="label text-slate-800 font-semibold">Password</label> <p className='text-lg text-red-400'>*</p>
                            </div>
                            <input type="password" {...register("password", { required: true, pattern: { value: /[#?!@$%^&*-]/, message: "Password Must Be One Special Character" }, minLength: { value: 8, message: "Password Minimum 8 Length" } })} required id='pass' className='input input-bordered py-2 h-10 px-2 w-full focus:outline-slate-900 rounded-none' />
                            {
                                errors.password && <p className='text-red-500 text-sm pt-2'>{errors?.password.message}</p>
                            }
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="cPass" className="label text-slate-800 font-semibold">Confirm Password</label> <p className='text-lg text-red-400'>*</p>
                            </div>
                            <input type="password" {...register("confirmPassword", { required: true })} required id='cPass' className='input input-bordered py-2 h-10 px-2 w-full focus:outline-slate-900 rounded-none' />
                            {
                                errorMessage && <p className='text-red-500 text-sm pt-2'>{errorMessage}</p>
                            }
                        </div>
                        <div className="flex justify-center gap-4 py-4 px-2">
                            <button className='btn btn-warning rounded-none tracking-widest font-light text-lg shadow-md min-h-min h-10 text-white w-1/2'>Register</button>
                            <Link to={'/login'} className='btn btn-default rounded-none uppercase tracking-widest shadow-md font-light text-md min-h-min h-10 text-slate-700 w-1/2'>Login</Link>
                        </div>
                    </div>
                </form>
                <div className="divider">Or</div>
                <div className="flex justify-center pt-6">
                    <button onClick={google} className='btn btn-default btn-md'><svg xmlns="http://www.w3.org/2000/svg" height="16" width="15.25" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg> Sign in with google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;