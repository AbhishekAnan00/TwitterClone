import React from "react";
import Avatar from "react-avatar";
import { HiOutlinePhoto } from "react-icons/hi2";
import { HiOutlineGif } from "react-icons/hi2";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { MdScheduleSend } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import CreatePost from "./CreatePost";
const Feed = () => {
  return (
    <div className=" border-zinc-700 border-l-2 border-r-2 w-[50%] h-[100vh]">
      <div className="flex justify-evenly border-b-2 border-zinc-700 h-20">
        <div className="flex justify-center items-center font-bold hover:bg-zinc-900 w-full text-xl cursor-pointer">
          <p className="w-20">For you</p>
        </div>
        <div className="flex justify-center items-center font-bold hover:bg-zinc-900 w-full text-xl cursor-pointer">
          <p className="w-20">Following</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-6 border-zinc-700 border-b-2">
        <div className="flex gap-6 cursor-pointer">
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEvn4gB805KkQhIUfHCq7AALWd8fT9gVpag&usqp=CAU"
            size="50"
            round={true}
          />
          <input
            type="text"
            placeholder="what is happening?!"
            className="outline-none border-none text-3xl bg-black"
          />
        </div>
        <div className="flex justify-between">
          <div className="flex text-2xl text-sky-500 pl-16">
            <span className=" hover:bg-sky-950 rounded-full flex justify-center items-center h-10 w-10 cursor-pointer">
              <HiOutlinePhoto />
            </span>
            <span className=" hover:bg-sky-950 rounded-full flex justify-center items-center h-10 w-10 cursor-pointer">
              <HiOutlineGif />
            </span>
            <span className=" hover:bg-sky-950 rounded-full flex justify-center items-center h-10 w-10 cursor-pointer">
              <BiPoll />
            </span>
            <span className=" hover:bg-sky-950 rounded-full flex justify-center items-center h-10 w-10 cursor-pointer">
              <BsEmojiSmile />
            </span>
            <span className=" hover:bg-sky-950 rounded-full flex justify-center items-center h-10 w-10 cursor-pointer">
              <MdScheduleSend />
            </span>
            <span className=" hover:bg-sky-950 rounded-full flex justify-center items-center h-10 w-10 cursor-pointer">
              <CiLocationOn />
            </span>
          </div>
          <div className="bg-sky-500 hover:bg-sky-600 text-center font-bold text-xl p-3 rounded-full w-24 cursor-pointer">Post</div>
        </div>
      </div>
      <CreatePost/>
    </div>
  );
};

export default Feed;
