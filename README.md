* Added At Least 3 Project features ? 
ans: * First Of All , I design this Web site Using React jsx. And  I create a 9 beautiful card using tailwind css and daisy Ui frame work.  Main features opf this Course roster project write in below: 
        1. Click The Select Button The Course Name Is Added in Bookmarks Section.
        2. You Cannot Enrolled or buy same  course once More time . You click the select button once more time , you see a error toast in your sidebar.
        3. You at most enrolled 20 credit hour course . You cannot enrolled or buy  above the 20 hours course credit time. you fill up your  20 hours course credit . and you buy once more course you see a error toast message in your side bar.

* Discuse How You Managed the state in your assignment project ?
    
ans: I Used the  four useState in overall course roster project. 
    *** const [bookmarks, setBookmarks] = useState([]); ***
    Bookmarks : This state variable is an array that appears to be intended for storing the user's bookmarked courses.
    setBookmarks: This state variable is an store the previous and new course value in Bookmarked Course.

    *** const [totalcredit, setTotalCredit] = useState(0); ***

    totalcredit: This state variable appears to represent the total credit time (course duration) for all the bookmarked courses.
    I can update this state variable whenever a new course is bookmarked or an existing one.

    *** const [totalRemining, setTotalRemining] = useState(20); ***

    totalRemining: This state variable seems to represent the total remaining time in the enrollment course.
    I  have initialized it with a value of 20, which could represent a default value for available reminning time.
    I might want to update this state variable based on user input or whenever the total credit time of bookmarked courses changes.

    *** const [totalCost, setTotalCost] = useState(0);***

    totalCost: This state variable seems to represent the total cost of all the bookmarked courses.
    It's initialized with a value of 0, indicating that there's no cost associated initially.
    You can update this state variable whenever a new course is bookmarked  and when the user changes course prices or their budget.

