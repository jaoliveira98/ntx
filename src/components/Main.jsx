import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";

const Main = () => {
  // Define state variable and its updater function
  const [movies, setMovies] = useState([]);

  // Fetch popular movies from external API and update state
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  // Select a random movie from the list of movies in state
  const movie = movies[Math.floor(Math.random() * movies.length)];

  // Extract relevant data from the selected movie
  const title = movie?.title;
  const backdropPath = movie?.backdrop_path;
  const releaseDate = movie?.release_date;
  const overview = movie?.overview;

  // Truncate long strings for display purposes
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[600px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        {backdropPath && (
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${backdropPath}`}
            alt={title}
          />
        )}
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm my-4">Released: {releaseDate}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
