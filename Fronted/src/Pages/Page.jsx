import React from 'react'
import LeftBar from '../Components/LeftBar'
import RightBar from '../Components/RightBar'
import Profile from "./Profile";
import { Routes, Route, useLocation } from "react-router-dom";
import Feed from '../Components/Feed';

const Page = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  return (
    <>
    <div className='flex justify-between mx-auto pl-10 pr-10'>
    {!isLoginPage && <LeftBar/>}
        <Routes>
          <Route path="/" element={<Feed/>} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    {!isLoginPage && <RightBar/>}
  </div>
  </>
  )
}

export default Page
