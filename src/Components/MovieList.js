import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log("Movies---->", movies);

  if (!movies) {
    return <div>Loading..... Come Back Later.</div>;
  }
  return (
    <>
      <div className="p-4">
        <h1 className="font-bold text-2xl py-2 text-white">{title}</h1>
        <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex gap-4 ">
            {movies?.map((movie) => {
              return (
                <MovieCard
                  key={movie.id}
                  posterPath={movie?.poster_path}
                  title={movie?.original_title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
