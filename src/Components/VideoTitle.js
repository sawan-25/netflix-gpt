import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <>
      <div className="md:pt-[15%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
        <h1 className="text-2xl md:text-6xl font-bold mt-[20%] md:mt-0">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
        <div className="">
          <button className=" bg-red-500 text-black p-2 md:p-4 px-10 md:px-14 rounded-md hover:bg-red-700 text-xl mt-2 md:mt-0">Play</button>
          <button className=" hidden md:inline-block  bg-slate-300 text-black p-4 px-14 rounded-md hover:bg-slate-200 text-lg mx-2">More Info</button>
        </div>
      </div>
    </>
  );
}

export default VideoTitle;
