import { useDispatch } from "react-redux";
import { API_MOVIES_OPTIONS } from "../Utils/Constants";
import { addMainTrailerVideo } from "../Utils/MoviesSlice";
import { useEffect } from "react";
import {useSelector} from 'react-redux';

const useMovieTrailer = (movieId)=>{

 const dispatch = useDispatch(); 
 const mainTrailerVideo = useSelector(store=> store.movies.mainTrailerVideo)
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_MOVIES_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);

    const trailers = json.results.filter((video) => video.type === "Trailer");
    // console.log("TRAILERS=====>", trailers);

    // if (!trailers) return; //Early Return.

    const mainTrailer = trailers.length ? trailers[0] : json.results[0];
    // console.log("MAIN TRTAILER===>", mainTrailer);
    dispatch(addMainTrailerVideo(mainTrailer));
  };

  useEffect(() => {
    !mainTrailerVideo && getMovieTrailer();
    console.log("MAIN TRAILER VIDEO");
  }, []);


}


export default useMovieTrailer;