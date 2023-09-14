/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {

    const [courses,setCourses] = useState([]);

    const handleClickToAdd = () =>{
        console.log("Hello World");
    }

    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data.courses))
    },[])

    return (
        <div className='w-3/4 mt-14'>
           <div className='grid grid-cols-3 gap-4 p-3'>
           {
              courses.map(course => <Course key={courses.id} handleClickToAdd ={handleClickToAdd} course={course}> </Course>)
            }
           </div>
        </div>
    );
};

export default Courses;