import React from "react";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";

const RightBar = ({otherUser}) => {
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
        {
          otherUser?.map((user) => {
            return <div key={user?._id} className="flex justify-between hover:bg-zinc-900 p-3 gap-2">
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
                  {user?.name}
                </p>
                <p className="text-gray-200 text-lg">@{user?.username}</p>
              </div>
            </div>
          </div>
          })
        }
        
      </div>
    </div>
  );
};

export default RightBar;
