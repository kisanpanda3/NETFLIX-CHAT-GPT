import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../CustomHooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
