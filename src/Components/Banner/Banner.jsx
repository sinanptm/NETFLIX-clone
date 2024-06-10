// src/components/Banner/Banner.js
import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "axios";
import { api_key, imageUrl, baseURL } from "../../constants/constants";
import BannerSkeleton from "../../assets/BannerSkeleton";

function Banner() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${baseURL}/trending/all/week?api_key=${api_key}&language=en-US`
      );
      const movies = res.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];

      setMovie(randomMovie);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <BannerSkeleton />;
  }

  return (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl}${movie.backdrop_path})` }}>
      <div className="content">
        <h1 className="title">{movie.title || movie.name || movie.original_title}</h1>
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
