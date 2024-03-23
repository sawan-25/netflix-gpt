import React, { useState } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  useNowPlayingMovies();

  return (
    <>
      <Header/>
      {
        /*  
          Main Container
            -Video background
            - Video title

          Secondary Container
            -movies list*n
              -cards *n
        
        */
      }
      
      <MainContainer/>
      <SecondaryContainer/>
    </>
  )
}

export default Browse;