/* eslint-disable no-unused-vars */
import React from 'react';

const Bookmark = ({bookmark}) => {
    const{course_name} = bookmark;
    return (
        <div>
           <h1>{course_name}</h1> 
        </div>
    );
};

export default Bookmark;