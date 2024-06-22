import Image from "next/image";
import React from "react";

const AddPost = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm">
      <div className="flex gap-4 justify-between">
        {/* Avatar and Text Input */}
        <div className="flex gap-4 flex-1">
          {/* Avatar  */}
          <Image
            src="https://images.pexels.com/photos/22590666/pexels-photo-22590666/free-photo-of-a-field-of-poppies-and-a-tree-in-the-middle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={48}
            height={48}
            className="w-12 h-12 object-cover rounded-full"
          />
          {/* Post  */}
          <div className="flex-1">
            {/* Text Input  */}
            <div className="flex gap-4">
              <textarea
                placeholder="What's on your mind?"
                className="flex-1 p-2 bg-slate-100 rounded-lg"
              ></textarea>

              <Image
                src={"/emoji.png"}
                alt=""
                width={20}
                height={20}
                className="w-5 h-5 cursor-pointer self-end"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Post Options */}
      <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src={'/addimage.png'}
            alt=""
            width={20}
            height={20}
          />
          Photo
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src={'/addVideo.png'}
            alt=""
            width={20}
            height={20}
          />
          Video
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src={'/addevent.png'}
            alt=""
            width={20}
            height={20}
          />
          Event
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src={'/poll.png'}
            alt=""
            width={20}
            height={20}
          />
          Poll
        </div>
      </div>
    </div>
  );
};

export default AddPost;
