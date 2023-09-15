/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks,totalRemining, totalcredit}) => {
   
    return (
        <div className='w-1/4 mt-14 bg-white shadow-2xl rounded-2xl mr-2 p-4'>
            <h1 className='text-2xl font-medium text-blue-700  mb-3'>Credit Hour Remining:  {totalRemining}</h1>
            <hr />
             <h1 className='text-2xl font-medium mb-5'>Course Name : </h1>
           {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
           }
           <br /> <hr /><br />
           <h1 className='text-2xl font-medium mt-5'>Total Credit Hour : {totalcredit}</h1>
            <hr />
        </div>
    );
};

export default Bookmarks;