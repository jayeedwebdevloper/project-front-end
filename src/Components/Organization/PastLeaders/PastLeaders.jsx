/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

const PastLeaders = () => {
    useEffect(() => {window.scrollTo(0,0)}, []);

    const pastLeaders = [
        {
            photo: "https://sayidan.kenzap.com/wp-content/uploads/ultimatemember/25/profile_photo-190.jpg?1702637677",
            name: "Malinda Jop",
            designation: "Business Administration"
        },
        {
            photo: "https://sayidan.kenzap.com/wp-content/uploads/ultimatemember/24/profile_photo-190.jpg?1702636340",
            name: "Katherine Chen",
            designation: "School Of Economics"
        },
        {
            photo: "https://sayidan.kenzap.com/wp-content/uploads/ultimatemember/23/profile_photo-190.jpg?1702636340",
            name: "Barbara Ortiz",
            designation: "Cardio thoracic Surgery"
        },
        {
            photo: "https://sayidan.kenzap.com/wp-content/uploads/ultimatemember/19/profile_photo-190.jpg?1702636340",
            name: "Dorothy Mendez",
            designation: "School of Medicine"
        },
        {
            photo: "https://sayidan.kenzap.com/wp-content/uploads/ultimatemember/18/profile_photo-190.jpg?1702636340",
            name: "Katherina Moon",
            designation: "School of Art"
        },
        {
            photo: "https://sayidan.kenzap.com/wp-content/uploads/ultimatemember/15/profile_photo-190.jpg?1702636340",
            name: "Frederico Vaasko",
            designation: "Actor Performance"
        }
    ]

    return (
        <div className='container mx-auto px-4 lg:px-6'>
            <div className="pt-40 pb-8">
                <h1 className='text-center text-slate-700 text-2xl pb-8 font-light'>Past Leaders</h1>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto xl:px-10">
                    {
                        pastLeaders.map((leader, i) => <div className='shadow-md border flex flex-col items-center justify-center p-5' key={i}>
                            <img className='h-40 w-40 rounded-full' src={leader.photo} alt={leader.name} />
                            <h4 className='text-slate-800 text-lg font-semibold pt-4 pb-2'>{leader.name}</h4>
                            <p className='text-slate-400 text-sm'>{leader.designation}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PastLeaders;