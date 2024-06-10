import { api_key, baseURL } from '../constants/constants';

// Base URLs for movies and TV shows
const commonMovies = `${baseURL}/discover/movie?api_key=${api_key}&with_`;
const commonTV = `${baseURL}/discover/tv?api_key=${api_key}&with_`;

export const Trending = `${baseURL}/trending/all/week?api_key=${api_key}&language=en-US`
export const Image = 'https://image.tmdb.org/t/p/original'

export const NetflixOriginals = `${commonTV}networks=213`;
export const AnimeShows = `${commonTV}genres=16`; 
export const ActionMovies = `${commonMovies}genres=28`;
export const ComedyMovies = `${commonMovies}genres=35`;
export const HorrorMovies = `${commonMovies}genres=27`;
export const RomanceMovies = `${commonMovies}genres=10749`;
export const Documentaries = `${commonMovies}genres=99`;
export const AnimeMovies = `${commonMovies}genres=16`; 
