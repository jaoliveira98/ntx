import React, { useEffect, useState } from "react";
import axios from "axios";

import Movie from "./Movie";

const Row = ({ title, fetchURL }) => {
  // Declare two state variables, "movies" and "like", using the useState hook.
  const [movies, setMovies] = useState([]);

  // Use the useEffect hook to fetch movie data from the API when the component mounts.
  // The fetchURL parameter is included in the dependency array to ensure that the effect runs when fetchURL changes.
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  console.log(movies);

  // Render the row of movie posters using the "movies" state.
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {movies.map((item, id) => (
            <Movie item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
