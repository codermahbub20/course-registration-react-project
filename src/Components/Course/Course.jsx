/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Course = ({ course }) => {
    const { thumbnail, course_name, details, credit, price } = course;
    return (
        <div >
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className='h-[244px] rounded-lg' src={thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl">{course_name}</h2>
                    <p>{details}</p>
                    <div className="w-full">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;