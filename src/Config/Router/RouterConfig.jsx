import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './../../../src/Screens/Login/login'
import Admission from '../../Screens/Admission/Admission'
import PersistentDrawerLeft from './../../Components/Drawer'
import AdminDashBoard from '../../Screens/Admin/AdminDashBoard'
import AddCourse from '../../Screens/Admin/AddCourse'
import AllStudents from '../../Screens/Admin/AllStudents'

const RouterConfig = () => {
  return (
    <BrowserRouter>
    <PersistentDrawerLeft/>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='admission' element={<Admission/>}/>
        <Route path='admin' element={<AdminDashBoard/>}>
              <Route path='addcourse' element={<AddCourse/>}/>
              <Route path='allstudents' element={<AllStudents/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default RouterConfig