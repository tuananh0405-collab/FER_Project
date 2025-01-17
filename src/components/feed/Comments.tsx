import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/20339341/pexels-photo-20339341/free-photo-of-view-of-a-wavy-sea-in-the-evening.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="">
        {/* COMMENT */}

        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR */}
          <Image
            src="https://images.pexels.com/photos/19915666/pexels-photo-19915666/free-photo-of-back-view-of-man-walking-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          {/* DESC */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Anh Johnson</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, fuga provident similique quia officia cupiditate eaque placeat impedit accusamus necessitatibus eligendi officiis architecto dolor doloremque reprehenderit nobis nulla? Omnis, enim.</p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt=""
                  width={12}
                  height={12}
                  className="cursor-pointer w-4 h-4"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">0 Likes</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          {/* ICON */}
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Comments;
