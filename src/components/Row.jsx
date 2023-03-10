import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Row = ({ title, fetchURL }) => {
  // Declare two state variables, "movies" and "like", using the useState hook.
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);

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
            <div className="w-[160px] sm:w-[200px] md:w-[280px] inline-block cursor-pointer relative p-2">
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {item?.title}
                </p>
                <p>
                  {like ? (
                    <FaHeart className="absolute top-4 left-4 text-grey-300" />
                  ) : (
                    <FaRegHeart className="absolute top-4 left-4 text-grey-300" />
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
