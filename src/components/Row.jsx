import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const Row = ({ title, fetchURL, id }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(fetchURL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        setError(error);
      });
  }, [fetchURL]);

  const slideLeft = () => {
    let slider = document.getElementById("slider" + id);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider" + id);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      {error ? (
        <div className="text-red-500">Error: {error.message}</div>
      ) : (
        <div className="relative flex items-center group">
          <CiCircleChevLeft
            onClick={slideLeft}
            className="bg-white left-0 absolute rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={30}
          />
          <div
            id={"slider" + id}
            className="w-full h-full snap-x overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
          >
            {movies.map((item, id) => (
              <Movie item={item} />
            ))}
          </div>
          <CiCircleChevRight
            onClick={slideRight}
            className="bg-white right-0 absolute rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            size={30}
          />
        </div>
      )}
    </>
  );
};

export default Row;
