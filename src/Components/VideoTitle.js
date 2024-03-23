import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <>
      <div className="pt-36 px-12">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="">
          <button className=" bg-red-500 text-black p-4 px-14 rounded-md hover:bg-red-700 text-xl">Play</button>
          <button className=" bg-slate-300 text-black p-4 px-14 rounded-md hover:bg-slate-200 text-lg mx-2">More Info</button>
        </div>
      </div>
    </>
  );
}

export default VideoTitle;
