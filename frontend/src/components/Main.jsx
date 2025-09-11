import React from 'react'
import Auth from '../components/Auth/Auth'
import DashBoard from '../components/dashboard/DashBoard'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import OAuthCallBack from './Auth/OAuthCallBack'
import { useAuth } from './hooks/AuthContext'
import AuthenticationSuccess from './Auth/AuthenticationSuccess'

function Main() {
  const { isLoggedIn } = useAuth()
  
  return (
    <BrowserRouter>
      <Routes>
      {/* only expose the login route if the user is logged in */}
      {
        isLoggedIn ? <Route path="/dashboard" element={<DashBoard />} /> 
        : <Route path="/" element={<Auth />} />
      }
        
        <Route path="/authenticate" element={<OAuthCallBack />} />
        <Route path="/call-back" element={<AuthenticationSuccess />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default Main
