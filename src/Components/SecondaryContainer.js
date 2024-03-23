import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  return (
    movies && (
      <div className="ml-12 ">
        <div className="-mt-52 relative z-20 ">
          <MovieList title={"Now Playing"} movies={movies} />
          <MovieList title={"Popular"} movies={movies} />
          <MovieList title={"Sci-Fi"} movies={movies} />
          <MovieList title={"Suspense"} movies={movies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
