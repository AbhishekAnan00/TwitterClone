import React from 'react'
import LeftBar from '../Components/LeftBar'
import RightBar from '../Components/RightBar'
import Profile from "./Profile";
import { Routes, Route, useLocation } from "react-router-dom";
import Feed from '../Components/Feed';
import { useSelector } from 'react-redux';
import useOtherUser from '../Hooks/useOtherUser';
import useGetTweet from '../Hooks/useGetTweet';

const Page = () => {
  const {user , otherUser} = useSelector(store=>store.user)
  useOtherUser(user?._id)
  useGetTweet(user?._id)
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  return (
    <>
    <div className='flex justify-between mx-auto pl-10 pr-10'>
    {!isLoginPage && <LeftBar/>}
        <Routes>
          <Route path="/home" element={<Feed/>} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    {!isLoginPage && <RightBar otherUser={otherUser}/>}
  </div>
  </>
  )
}

export default Page
