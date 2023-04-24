import React from "react";
import { Navigate, Routes, Route } from 'react-router-dom'

import Home  from '../components/home/Home'
import ContactRegister from "../components/user/ContactRegister";

export default props =>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<ContactRegister/>} />
            <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>