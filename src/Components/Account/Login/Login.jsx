/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/Context';
import toast from 'react-hot-toast';

const Login = () => {
    useEffect(() => { window.scrollTo(0, 0) }, []);
    const [error, setError] = useState('');
    const [emptyEmail, setEmptyEmail] = useState('');

    const { userInfo, googleLog, loginIn, resetPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/';

    const { register, handleSubmit } = useForm();

    const registerAccount = (data) => {
        const email = data.email;
        const password = data.password;

        loginIn(email, password)
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch(err => setError(err.message))

    }
    const google = () => {
        googleLog()
            .then((result) => {
                const user = result.user;
                const account = {
                    photoURL: user.photoURL,
                    email: user?.email,
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
                            navigate(from, { replace: true });
                        }
                    })
            })
    }


    const forgetPass = () => {
        const email = document.getElementById("pEmail").value;
        if (email) {
            setEmptyEmail('');
            resetPassword(email)
                .then(() => {
                    toast.success("We Send You Reset Link In Your Email", { duration: 3000 });
                    document.getElementById("loginPass").style.display = "block";
                })
        } else {
            setEmptyEmail("For Reset Password Please Enter Your Email And Click Forget Password");
            document.getElementById("loginPass").style.display = "none";
        }
    }

    return (
        <div className='container mx-auto px-4 lg:px-6'>
            <div className="pt-40 pb-12">
                <h1 className='text-center text-2xl lg:text-3xl font-semibold text-slate-700 py-5'>Login Your Account</h1>
                <form className='form-control' onSubmit={handleSubmit(registerAccount)}>
                    <div className="gap-4 w-full lg:w-[500px] mx-auto grid grid-cols-1">
                        <div className='py-1'>
                            <div>
                                <label htmlFor="pEmail" className="label font-semibold text-slate-800">Email</label>
                            </div>
                            <input type="email" {...register("email", { required: true })} id='pEmail' required className='input input-bordered py-2 h-10 px-2 w-full rounded-none focus:outline-slate-900' />
                            <p className='text-sm pt-2 text-red-500'>{emptyEmail}</p>
                        </div>
                        <div className='py-1'>
                            <div className='flex items-center gap-1'>
                                <label htmlFor="loginPass" className="label font-semibold text-slate-800">Password</label>
                            </div>
                            <input type="password" {...register("password")} required id='loginPass' className='input input-bordered py-2 h-10 px-2 w-full rounded-none focus:outline-slate-900' />
                            <p className='text-xs text-red-500 font-thin pt-3'>{error}</p>
                        </div>
                        <div className="flex justify-center gap-4 py-4 px-2">
                            <button className='btn btn-warning rounded-none tracking-widest font-light text-lg shadow-md min-h-min h-10 text-white w-1/2'>Login</button>
                            <Link to={'/register'} className='btn btn-default rounded-none uppercase tracking-widest shadow-md font-light text-md min-h-min h-10 text-slate-700 w-1/2'>Register</Link>
                        </div>
                    </div>
                </form>
                <p onClick={forgetPass} className='text-sm font-light text-slate-400 text-center tracking-widest cursor-pointer hover:underline'>Forget Password ?</p>
                <div className="divider">Or</div>
                <div className="flex justify-center pt-6">
                    <button onClick={google} className='btn btn-default btn-md'><svg xmlns="http://www.w3.org/2000/svg" height="16" width="15.25" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg> Sign in with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;