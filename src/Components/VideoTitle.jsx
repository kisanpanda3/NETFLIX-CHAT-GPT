import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="p-2 text-lg w-1/2">{overview}</p>
      <div>
        <button className="cursor-pointer bg-white  text-black font-bold p-4 px-10 rounded-xl text-lg hover:bg-opacity-70 ">
          Play
        </button>
        <button className=" mx-2 cursor-pointer bg-gray-500 bg-opacity-50 text-white font-bold p-4 px-10 rounded-xl text-lg">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
