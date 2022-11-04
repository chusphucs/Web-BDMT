import React from 'react'
import {  Routes, Route } from 'react-router-dom'

import Login from "../pages/login"
import Signin from "../pages/signin"


function AllRoutes() {
    return (
        <Routes>
           <Route path="/login" element={<Login />} />
           <Route path="/signup" element={<Signin />} />
        </Routes>
    )
}
export default AllRoutes
