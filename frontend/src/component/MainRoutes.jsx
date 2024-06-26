import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

function MainRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
        </Routes>
        
    </div>
  )
}

export default MainRoutes
