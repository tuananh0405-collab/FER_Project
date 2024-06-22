import Image from "next/image";
import React from "react";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={"/noAvatar.png"}
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Anh JohnSon</span>
        </div>
        <Image src={"/more.png"} alt="" width={16} height={16} />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/15301144/pexels-photo-15301144/free-photo-of-foamy-waves-on-the-shore-and-skyscrapers-of-a-coastal-city-in-distance.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill
            className="object-cover rounded-md"
            alt=""
          />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, sequi
          aspernatur animi minus at libero delectus illum modi similique tenetur
          maxime perspiciatis, veritatis quidem! Minus tempore totam ex
          repudiandae. Ducimus?
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-2">
            <Image
              src={"/like.png"}
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-2">
            <Image
              src={"/comment.png"}
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-2">
            <Image
              src={"/share.png"}
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments/>
    </div>
  );
};

export default Post;
