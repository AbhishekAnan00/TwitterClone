import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import useGetUser from "../Hooks/useGetUser.js";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user, profile } = useSelector((store) => store.user);
  useGetUser(user?._id);
  return (
    <div className=" border-zinc-700 border-l-2 border-r-2 w-[50%] h-[100vh]">
      <div className="flex gap-10 pl-8 pt-2 border-zinc-700 border-b-2 cursor-pointer">
        <div className="text-3xl flex justify-center items-center">
          <Link to="/">
            <IoArrowBackSharp />
          </Link>
        </div>
        <div className="flex flex-col">
          <p className="text-2xl font-extrabold">{profile?.name}</p>
          <p className="text-zinc-500">9 Posts</p>
        </div>
      </div>
      <div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0TbrokUY7qO9Yq07rAPpnJ_KWUcVn_tBqA&usqp=CAU"
            className="w-full h-60 cursor-pointer"
          />
        </div>
        <div className="absolute top-52 pl-8 cursor-pointer">
          <Avatar
            src="https://img.freepik.com/premium-vector/woman-profile-cartoon_18591-58480.jpg"
            size="160"
            round={true}
          />
        </div>
        <div className="text-right cursor-pointer">
          <button className="mt-3 mr-3 font-extrabold p-2 border-zinc-400 hover:bg-zinc-900 border-2 w-40 rounded-full">
            Edit Profile
          </button>
        </div>
        <div className="flex flex-col px-8 py-6">
          <p className="font-extrabold text-2xl">{profile?.name}</p>
          <p className="text-zinc-500 text-xl">{profile?.username}</p>
          <p className="py-6 text-xl font-semibold">
            A passionate software engineer from india.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
