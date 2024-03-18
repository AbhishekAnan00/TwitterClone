import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { CiViewList } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { CgMoreO } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
const LeftBar = () => {
  return (
    <div className="flex flex-col w-[25%]">
      <div className="flex items-center justify-center hover:bg-zinc-900 rounded-full h-[70px] w-[70px] cursor-pointer">
        <FaXTwitter className="h-[50px] w-[50px]" />
      </div>
      <div className="flex flex-col">
        <Link to="/">
        <div className="flex items-center gap-4 text-2xl hover:bg-zinc-900 rounded-full h-[70px] w-[50%] cursor-pointer">
          <ion-icon>
            <CiHome className="h-[40px] w-[50px]" />
          </ion-icon>
          <p>Home</p>
        </div>
        </Link>
        <div className="flex items-center gap-4 text-2xl hover:bg-zinc-900 rounded-full h-[70px] w-[50%] cursor-pointer">
          <ion-icon>
            <IoSearchOutline className="h-[40px] w-[50px]" />
          </ion-icon>
          <p>Explore</p>
        </div>
        <div className="flex items-center gap-4 text-2xl hover:bg-zinc-900 rounded-full h-[70px] w-[50%] cursor-pointer">
          <ion-icon>
            <IoNotificationsOutline className="h-[40px] w-[50px]" />
          </ion-icon>
          <p>Notifications</p>
        </div>
        <div className="flex items-center gap-4 text-2xl hover:bg-zinc-900 rounded-full h-[70px] w-[50%] cursor-pointer">
          <ion-icon>
            <HiOutlineMail className="h-[40px] w-[50px]" />
          </ion-icon>
          <p>Messages</p>
        </div>
        <div className="flex items-center gap-4 text-2xl hover:bg-zinc-900 rounded-full h-[70px] w-[50%] cursor-pointer">
          <ion-icon>
            <CiViewList className="h-[40px] w-[50px]" />
          </ion-icon>
          <p>Lists</p>
        </div>
        <Link to="/profile">
        <div className="flex items-center gap-4 text-2xl hover:bg-zinc-900 rounded-full h-[70px] w-[50%] cursor-pointer">
          <ion-icon>
            <BiUser className="h-[40px] w-[50px]" />
          </ion-icon>
          <p>Profile</p>
        </div>
        </Link>
        <div className="flex items-center gap-4 text-2xl hover:bg-zinc-900 rounded-full h-[70px] w-[50%] cursor-pointer">
          <ion-icon>
            <CgMoreO className="h-[40px] w-[50px]" />
          </ion-icon>
          <p>More</p>
        </div>
        <div className="flex items-center gap-4 text-2xl hover:bg-zinc-900 rounded-full h-[70px] w-[50%] cursor-pointer">
          <ion-icon>
          <AiOutlineLogout className="h-[40px] w-[50px]" />
          </ion-icon>
          <p>Logout</p>
        </div>
        <div className="flex justify-center items-center gap-4 mt-2 text-2xl bg-sky-500 hover:bg-sky-600 h-[70px] w-[70%] rounded-full cursor-pointer">
          Post
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
