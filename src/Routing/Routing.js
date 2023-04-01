import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home';
import Login from '../Components/Login';
import PageNotFound from '../Components/PageNotFound';
import SignUp from '../Components/SignUp';

function Routing() {
  return (
<BrowserRouter>
    <Routes>
    
        <Route path='/' element={<Home/>} />
        <Route path='signup' element={<SignUp/>} />
        <Route path='login' element={<Login/>} />
        <Route path='/*' element={<PageNotFound/>} />
    </Routes>
</BrowserRouter>
    )
}

export default Routing;