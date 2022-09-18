import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Courses from './components/pages/Courses';
import UserName from './components/pages/UserName';
import Completed from './components/pages/Completed';
import UnCompleted from './components/pages/UnCompleted';
import ManageStudents from './components/pages/ManageStudents';
import Dashboard from './components/pages/Dashboard';
// import Requests from './components/pages/Requests';
// import Reports from './components/pages/Reports';
import ResetPassword from './components/pages/ResetPassword';
import Logout from './components/pages/Logout';
import Sidebar from './components/sidebar/Sidebar';
import CreateRequest from './components/pages/CreateRequest';
import MyRequests from './components/pages/MyRequests';
import OtherRequests from './components/pages/OtherRequests';
import AddNewCourse from './components/pages/AddNewCourse';
import FirstPage from './components/pages/FirstPage';
import Login from './components/pages/login/Login';
import CourseInformation from './components/pages/CourseInformation';
import Asssessment from './components/pages/Asssessment';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Sidebar>
    <Routes>  
      <Route path='/firstpage' element={<FirstPage/>}/>
      <Route path='/' element={<FirstPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/username' element={<UserName/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      {/* <Route path='/' element={<Dashboard/>}/> */}
      {/* <Route path='/courses' element={<Courses/>}/> */}
      <Route path='/manageStudents' element={<ManageStudents/>}/>
      <Route path='/completed' element={<Completed/>}/>
      <Route path='/unCompleted' element={<UnCompleted/>}/>
      {/* <Route path='/requests' element={<Requests/>}/> */}
      <Route path='/myRequests' element={<MyRequests/>}/>
      <Route path='/otherRequests' element={<OtherRequests/>}/>
      {/* <Route path='/reports' element={<Reports/>}/> */}
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/resetPassword' element={<ResetPassword/>}/>
      <Route path='/createrequest' element={<CreateRequest/>}/>
      <Route path='/addnewcourse' element={<AddNewCourse/>}/>
      <Route path='/courseinformation' element={<CourseInformation/>}/>
      <Route path='/assessment' element={<Asssessment/>}/>
      

    </Routes>
    </Sidebar>
    </BrowserRouter>
    </>
  )
}

export default App