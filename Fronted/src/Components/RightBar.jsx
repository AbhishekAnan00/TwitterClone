import React from "react";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
const RightBar = () => {
  return (
    <div className="w-[25%] p-2 pl-6">
      <div className="flex items-center text-2xl gap-4 p-4 bg-zinc-800 hover:border-sky-700 border-2 rounded-full">
        <CiSearch className="text-3xl hover:text-sky-700" />
        <input
          type="text"
          placeholder="search"
          className="outline-none border-none bg-zinc-800"
        />
      </div>
      <div className="flex flex-col mt-4 bg-zinc-800 rounded-xl">
        <div>
          <p className="font-extrabold text-2xl pl-3 pt-3 pb-3">
            Who to follow
          </p>
        </div>
        <div className="flex justify-between hover:bg-zinc-900 p-3 gap-2">
          <div className="flex gap-2">
            <div className="cursor-pointer">
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEiVUGNmJNtvUjUj195B-8kViUctN9RdoUBzoR35TtrrjhSIh7qxS9q-YToiZZcWuf8nE&usqp=CAU"
                size="50"
                round={true}
              />
            </div>
            <div className="flex flex-col">
              <p className="font-extrabold text-xl cursor-pointer">
                Chrish Hemstworth
              </p>
              <p className="text-gray-200 text-lg">@chrishhem</p>
            </div>
          </div>
          <div className="flex justify-center items-center text-center font-bold bg-white hover:bg-slate-100 text-black rounded-full w-24 h-10 cursor-pointer">
            Follow
          </div>
        </div>
        <div className="flex justify-between hover:bg-zinc-900 p-3 gap-2">
          <div className="flex gap-2">
            <div className="cursor-pointer">
              <Avatar
                src="https://img.freepik.com/premium-vector/woman-profile-cartoon_18591-58480.jpg"
                size="50"
                round={true}
              />
            </div>
            <div className="flex flex-col">
              <p className="font-extrabold text-xl cursor-pointer">Rose</p>
              <p className="text-gray-200 text-lg">@rose</p>
            </div>
          </div>
          <div className="flex justify-center items-center text-center font-bold bg-white hover:bg-slate-100 text-black rounded-full w-24 h-10 cursor-pointer">
            Follow
          </div>
        </div>
        <div className="flex justify-between hover:bg-zinc-900 p-3 gap-2">
          <div className="flex gap-2">
            <div className="cursor-pointer">
              <Avatar
                src="https://img.freepik.com/premium-vector/masterpiece-high-detailed-1girl-short-hair-black-hair-blunt-bangs-purple-eyes-parted-lips-happy_764382-12421.jpg"
                size="50"
                round={true}
              />
            </div>
            <div className="flex flex-col">
              <p className="font-extrabold text-xl cursor-pointer">
                Taylor Swift
              </p>
              <p className="text-gray-200 text-lg">@taylorsw</p>
            </div>
          </div>
          <div className="flex justify-center items-center text-center font-bold bg-white hover:bg-slate-100 text-black rounded-full w-24 h-10 cursor-pointer">
            Follow
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
