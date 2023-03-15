import React, { useRef } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Movie from "./Movie";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const Row = ({ title, fetchURL, id }) => {
  const sliderRef = useRef(null);

  const { data, error, isLoading } = useQuery(fetchURL, async () => {
    const response = await axios.get(fetchURL);
    return response.data.results;
  });

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 500;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft += 500;
  };

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto my-4">
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <CiCircleChevLeft
          onClick={slideLeft}
          className="bg-white left-0 absolute rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={30}
        />
        <div
          ref={sliderRef}
          className="w-full h-full snap-x overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {data.map((item) => (
            <Movie key={item.id} item={item} />
          ))}
        </div>
        <CiCircleChevRight
          onClick={slideRight}
          className="bg-white right-0 absolute rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={30}
        />
      </div>
    </div>
  );
};

export default Row;
