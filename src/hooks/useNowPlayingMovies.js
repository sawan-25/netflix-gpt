import { useDispatch } from "react-redux";
import { API_MOVIES_OPTIONS } from "../Utils/Constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../Utils/MoviesSlice";
import {useSelector} from 'react-redux';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(store=> store.movies.nowPlayingMovies)

  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_MOVIES_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json?.results));
  };

  useEffect(() => {
   !nowPlayingMovies&& getNowPlaying();
   console.log("NOW PLAYING MOVIE APIS CALLING")
  }, []);
};

export default useNowPlayingMovies;
