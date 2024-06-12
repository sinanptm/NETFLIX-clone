import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "axios";
import BannerSkeleton from "../Skelton/BannerSkeleton";
import { Trending, Image } from "../../utils/URLs";

function Banner() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get(Trending);
      const movies = res.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      
      setMovie(randomMovie);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <BannerSkeleton />;
  }

  if (!movie) {
    return null;
  }

  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${Image}${movie.backdrop_path})` }}
    >
      <div className="content">
        <h1 className="title">
          {movie.title || movie.name || movie.original_title}
        </h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie.overview}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
