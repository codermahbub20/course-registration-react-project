/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks, totalcredit}) => {
   
    return (
        <div className='w-1/4 mt-14'>
             <h1 className='text-2xl font-medium mb-5'>Course Name: </h1>
           {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
           }
           <h1 className='text-2xl font-medium mt-5'>Total Credit Hour : {totalcredit}</h1>
            <hr />
        </div>
    );
};

export default Bookmarks;