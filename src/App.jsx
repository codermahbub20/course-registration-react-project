
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Courses from './Components/Courses/Courses'

function App() {
  

  return (
    <>
      
      <h1 className='text-3xl font-medium text-center'>Course Registration</h1>
      <div className='flex'>
      <Courses></Courses>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
