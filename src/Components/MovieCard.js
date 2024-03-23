import React from 'react'
import {IMG_CDN_URL} from "../Utils/Constants"

const MovieCard = ( { posterPath, title }) => {

    console.log(posterPath ,title)

  return (
    <>  
        <div className='w-48 pr-4'>
            <img className=' rounded-md' alt = "MoviePoster" src  = {IMG_CDN_URL + posterPath} />
            <h1 className='text-white'>{title}</h1>
        </div>
    
    </>

  )
}

export default MovieCard