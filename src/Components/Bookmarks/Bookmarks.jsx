/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks}) => {
   
    return (
        <div className='w-1/4 mt-14'>
           {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
           }
        </div>
    );
};

export default Bookmarks;