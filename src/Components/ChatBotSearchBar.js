import React, { useRef } from "react";
import lang from "../Utils/language";
import { useSelector } from "react-redux";
import openai from "../Utils/openai";
import { API_MOVIES_OPTIONS } from "../Utils/Constants";

const ChatBotBar = () => {
  const langKey = useSelector((store) => store.config.currentLanguauge);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_MOVIES_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleSearchText = async () => {
    console.log(searchText.current.value);

    const aiQuery =
      "Act as a movie recommendation system and suggest movies for the query" +
      searchText.current.value +
      ". Only give me names of 5 movies , comma separated like the example result given ahead. Example result : Sholay , Gabbar , Race , Don , Stree.";

    const aiResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: aiQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(aiResults.choices[0]?.message?.content);
    
    const aiResultsMovies = aiResults.choices[0]?.message?.content.split(",");

    const promiseArray = aiResultsMovies.map(movie=>searchMovieTMDB(movie));

    const tmdbMovieResults = Promise.all(promiseArray);

    console.log(tmdbMovieResults);
  };

  return (
    <>
      <div className="flex justify-center pt-[20%]">
        <form
          className=" w-1/2 grid grid-cols-12 bg-black rounded-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            className="p-4 m-4 rounded-md col-span-9"
            type="text"
            placeholder={lang[langKey].chatBotSearchPlaceholder}
          />
          <button
            className="bg-red-600 m-4 px-4 py-2 rounded-md col-span-3"
            onClick={handleSearchText}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatBotBar;
