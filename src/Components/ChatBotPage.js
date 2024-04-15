import React from 'react'
import ChatBotSearchBar from './ChatBotSearchBar'
import ChatBotMovieSuggestions from './ChatBotMovieSuggestions'
import { IMG_BCKGRND } from '../Utils/Constants'

const ChatBotPage = () => {
  return (
   <>
    
    <div className="absolute -z-10 ">
        <img className='h-screen object-cover md:w-screen'
          src= {IMG_BCKGRND}
          alt="background-Image"
        />
      </div>
    <div className=''>
    <ChatBotSearchBar/>
    <ChatBotMovieSuggestions/>
    </div>
   </>
  )
}

export default ChatBotPage