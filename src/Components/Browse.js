import React, { useState } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import ChatBotPage from './ChatBotPage';
import { useSelector } from "react-redux";

const Browse = () => {

  useNowPlayingMovies();

  const showChatBot = useSelector((store)=>store.chatBot?.showChatBot);
  return (
    <>
      <div className="">
      <Header/>
     { showChatBot ? (<ChatBotPage/>) : 
      (<>
      <MainContainer/>
      <SecondaryContainer/>
      </>)}
    
      </div>
    </>
  )
}

export default Browse;