/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.init';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext();

const Context = ({ children }) => {
    const google = new GoogleAuthProvider();
    const [userInfo, setUserInfo] = useState({});
    const [loader, setLoader] = useState(true);

    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const updateUser = (userInfo) => {
        setLoader(true)
        return updateProfile(auth.currentUser, userInfo)
    }
    useEffect(() => {
        const Logged = onAuthStateChanged(auth, (user) => {
            setUserInfo(user);
            setLoader(false);
        })
        return () => {
            Logged();
        }
    }, []);
    const logOut = () => {
        signOut(auth)
            .then(() => { }).catch(error => console.log(error.message))
    }
    const verify = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => { alert('We Sent Verification Email in Your Account') })
    }
    const googleLog = () => {
        return signInWithPopup(auth, google)
    }

    const Information = { createAccount, loginIn, resetPassword, userInfo, loader, logOut, verify, googleLog, updateUser };

    return (
        <AuthContext.Provider value={Information}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;