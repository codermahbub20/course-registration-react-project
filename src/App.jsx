/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Courses from './Components/Courses/Courses'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [totalcredit, setTotalCredit] = useState(0);
  const [totalRemining, setTotalRemining] = useState(20);

  const handleClickToAdd = course => {

    const isExist = bookmarks.find((item) => item.id == course.id);
    let count = course.credit;
    if (isExist) {
      return  toast.warn("You Already Enrolled This Course!!");
    } else {

      bookmarks.forEach(element => {
        count = count + element.credit;
      });
      const totalRemining = 20 - count;
      if(totalRemining < 0 ){
        return toast.error("Your Credit Hour almost Done, You can not Buy Another Course!!");
      }
      setTotalCredit(count);
      setTotalRemining(totalRemining);
      const newBookmarks = [...bookmarks, course];
      setBookmarks(newBookmarks);
    }


  }

  return (

    <>
      <h1 className='text-3xl font-medium text-center mt-4'>Course Registration</h1>
      <div className='flex'>
        <Courses handleClickToAdd={handleClickToAdd}></Courses>
        <Bookmarks bookmarks={bookmarks} totalRemining={totalRemining} totalcredit={totalcredit}></Bookmarks>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
