import React from "react";
import lang from "../Utils/language";
import {useSelector} from 'react-redux';

const ChatBotBar = () => {

  const langKey = useSelector((store)=> store.config.currentLanguauge)
  return (
    <>
      <div className="flex justify-center pt-[20%]">
        <form className=" w-1/2 grid grid-cols-12 bg-black rounded-md">
          <input
            className="p-4 m-4 rounded-md col-span-9"
            type="text"
            placeholder={lang[langKey].chatBotSearchPlaceholder}
          />
          <button className="bg-red-600 m-4 px-4 py-2 rounded-md col-span-3">{lang[langKey].search}</button>
        </form>
      </div>
    </>
  );
};

export default ChatBotBar;
