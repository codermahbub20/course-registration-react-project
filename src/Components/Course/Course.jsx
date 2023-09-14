/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import 'FiDollarSign';
// import { FiDollarSign } from 'react-icons/fa';
import React from 'react';


const Course = ({ course ,handleClickToAdd}) => {
    const { thumbnail, course_name, details, credit, price,dollar,book } = course;
    return (
        <div >
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className='h-[244px] rounded-lg p-3' src={thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl">{course_name}</h2>
                    <p>{details}</p>
                    <div className='flex'>
                        <img className='w-6' src={dollar} alt="" />
                        <p className='text-xl font-medium'>Price: {price}</p>
                        <img className='w-6 mr-1' src={book} alt="" />
                        <p className='text-xl font-medium'>Credit: {credit}</p>
                    </div>
                    <div >
                        <button onClick={()=>handleClickToAdd()} className="w-full btn btn-primary text-2xl">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;