import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "axios";
import { api_key, imageUrl,baseURL } from "../../constants/constants";
import netflixLogo from '../../assets/netflix_logo_icon.png'

function Banner() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://api.themmoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`
      );
      const movies = res.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];

      setMovie(randomMovie);
      setLoading(false);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return !loading ? (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl}${movie.backdrop_path})` }}>
    <img style={{zIndex:"9999"}} src={netflixLogo} alt="Netflix Logo" className="netflix-logo" />
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
  ) : (
    <div>Loading...</div>
  );
}

export default Banner;
