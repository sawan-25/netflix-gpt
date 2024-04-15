import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  return (
    movies && (
      <div className="ml-0 bg-black">
        <div className="mt-0 md:-mt-52 relative z-20 mx-2 md:mx-8 ">
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
