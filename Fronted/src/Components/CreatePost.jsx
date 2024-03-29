import React from "react";
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { PiBookmarkSimple } from "react-icons/pi";
import { useSelector } from "react-redux";
import { MdOutlineDelete } from "react-icons/md";
const CreatePost = () => {
  const { tweet } = useSelector((store) => store.tweet);
  return (
    <div>
      <div className="flex py-3">
        <div className="px-6">
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEvn4gB805KkQhIUfHCq7AALWd8fT9gVpag&usqp=CAU"
            size="50"
            round={true}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <p className="font-bold text-xl">{tweet?.name}</p>
            <p className="text-zinc-700 text-lg">@{tweet?.username}</p>
            <span className="text-zinc-700 text-lg">. 6m</span>
          </div>
          <div>
            <p className="text-lg">{tweet?.description}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="flex items-center gap-2 text-xl">
          <FaRegComment />
          <span>{tweet?.like?.length}</span>
        </div>
        <div className="flex items-center gap-2 text-xl">
          <CiHeart />
          <span>{tweet?.like?.length}</span>
        </div>
        <div className="flex items-center gap-2 text-xl">
          <PiBookmarkSimple />
          <span>{tweet?.like?.length}</span>
        </div>
        <div className="flex items-center gap-2 text-xl">
          <MdOutlineDelete />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
