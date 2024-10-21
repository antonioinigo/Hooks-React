import React from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import { NavBar } from './NavBar'

import { UserProvider } from './context/USerProvider'



export const MainApp = () => {
  return (
    <UserProvider>

    
   
    <NavBar />

    {/* <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/about">About</Link> */}

    <hr />
    <Routes>
        <Route path="/" element={<HomePage/>}  />
        <Route path="login" element={<LoginPage/>}  />
        <Route path="about" element={<AboutPage/>}  />

        {/* <Route path="/*" element={<h1>404 Not Found</h1>}  /> */}

        <Route path='/*' element={<Navigate to='/about' />} />

    </Routes>

   
</UserProvider>
)
}
