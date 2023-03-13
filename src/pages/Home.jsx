import React from "react";
import RandomMovieBanner from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <RandomMovieBanner />
      <Row id="1" title="UpComing" fetchURL={requests.requestUpcoming} />
      <Row id="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row id="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row id="4" title="Top Rated" fetchURL={requests.requestTopRated} />
    </>
  );
};

export default Home;
