import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Banner from "../Components/Banner/Banner";
import RowPost from "../Components/RowPost/RowPost";
import {
  NetflixOriginals,
  AnimeMovies,
  ComedyMovies,
  HorrorMovies,
  AnimeShows,
  Documentaries,
  RomanceMovies,
  ActionMovies
} from "../utils/URLs";

const Body = () => {
  return (
    <>
      <NavBar loc={"Home"}/>
      <Banner />
      <RowPost url={NetflixOriginals} title="Netflix Originals" />
      <RowPost url={ActionMovies} isSmall title="Action" />
      <RowPost url={AnimeMovies} isSmall title="Anime Movies" />
      <RowPost url={RomanceMovies} isSmall title="Romance" />
      <RowPost url={ComedyMovies} isSmall title="Comedy" />
      <RowPost url={AnimeShows} isSmall title="Anime Shows" />
      <RowPost url={HorrorMovies} isSmall title="Horror" />
      <RowPost url={Documentaries} isSmall title="Documentaries" />
    </>
  );
};

export default Body;
