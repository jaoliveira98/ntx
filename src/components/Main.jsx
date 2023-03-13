import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../Requests";
import { CiClock1, CiPlay1 } from "react-icons/ci";
import { PrimaryBtn, SecondaryBtn } from "./buttons";
import { LargeTitle, Body, Footnote } from "./typography";

const Main = () => {
  // Define state variable and its updater function
  const [movies, setMovies] = useState([]);

  // Fetch popular movies from external API and update state
  useEffect(() => {
    const source = axios.CancelToken.source(); // Create a cancel token source

    axios
      .get(requests.requestPopular, {
        cancelToken: source.token, // Set the cancel token to the request config
      })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Failed to fetch popular movies: ", error);
        setMovies([]); // Set a fallback value for movies state
      });

    return () => {
      source.cancel("Request cancelled by user"); // Cancel the request when the component unmounts
    };
  }, []);

  // Select a random movie from the list of movies in state
  const movie = movies[Math.floor(Math.random() * movies.length)];

  // Extract relevant data from the selected movie using destructuring
  const {
    title,
    backdrop_path: backdropPath,
    release_date: releaseDate,
    overview,
  } = movie || {};

  // Truncate long strings for display purposes
  const truncateString = (str, num) => {
    return str?.length > num ? `${str.slice(0, num)}...` : str;
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0)), url("https://image.tmdb.org/t/p/original/${backdropPath}")`,
      }}
      className="w-full min-h-screen flex items-center p-4 bg-no-repeat bg-cover bg-center"
    >
      <div className="w-full container mx-auto p-4">
        <LargeTitle className="max-w-[100%] lg:max-w-[50%]">{title}</LargeTitle>
        <div className="my-4 flex items-center gap-4">
          <PrimaryBtn className="flex items-center gap-1">
            <CiPlay1 /> Play
          </PrimaryBtn>
          <SecondaryBtn className="flex items-center gap-1">
            <CiClock1 /> Watch Later
          </SecondaryBtn>
        </div>
        <Footnote>Released: {releaseDate}</Footnote>
        <Body className="max-w-[100%] lg:max-w-[50%]">
          {truncateString(overview, 150)}
        </Body>
      </div>
    </div>
  );
};

export default Main;
