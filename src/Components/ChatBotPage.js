import React from 'react'
import ChatBotSearchBar from './ChatBotSearchBar'
import ChatBotMovieSuggestions from './ChatBotMovieSuggestions'
import { IMG_BCKGRND } from '../Utils/Constants'

const ChatBotPage = () => {
  return (
   <>
    <div>
    <div className="absolute -z-10">
        <img
          src= {IMG_BCKGRND}
          alt="background-Image"
        />
      </div>

    <ChatBotSearchBar/>
    <ChatBotMovieSuggestions/>
    </div>
   </>
  )
}

export default ChatBotPage