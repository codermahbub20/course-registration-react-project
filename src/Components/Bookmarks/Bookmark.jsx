/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Bookmark = ({bookmark}) => {
    const{course_name} = bookmark;
    return (
        <div > 
          <li className='bg-gray-100 mb-2 text-2xl'>{course_name}</li>
          <hr />
        </div>
    );
};

export default Bookmark;