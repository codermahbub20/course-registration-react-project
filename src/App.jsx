/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Courses from './Components/Courses/Courses'

function App() {

  const [bookmarks,setBookmarks] = useState([]);

  const handleClickToAdd = course =>{
   const newBookmarks = [...bookmarks,course];
   setBookmarks(newBookmarks);
  }

  return (

    <>
      <h1 className='text-3xl font-medium text-center'>Course Registration</h1>
      <div className='flex'>
      <Courses handleClickToAdd={handleClickToAdd}></Courses>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
