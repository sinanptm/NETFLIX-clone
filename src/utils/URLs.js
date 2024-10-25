export const baseURL = 'https://api.themoviedb.org/3'

const commonMovies = `${baseURL}/discover/movie?with_`;
const commonTV = `${baseURL}/discover/tv?with_`;


export const Trending = `${baseURL}/trending/all/week?language=en-US`
export const Image = 'https://image.tmdb.org/t/p/original'

export const Avatar = 'https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
export const Logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'

export const LoginBackground = 'https://assets.stickpng.com/images/588b57fcd9996e24bc43c529.png'

export const NetflixOriginals = `${commonTV}networks=213`;
export const AnimeShows = `${commonTV}genres=16`;
export const ActionMovies = `${commonMovies}genres=28`;
export const ComedyMovies = `${commonMovies}genres=35`;
export const HorrorMovies = `${commonMovies}genres=27`;
export const RomanceMovies = `${commonMovies}genres=10749`;
export const Documentaries = `${commonMovies}genres=99`;
export const AnimeMovies = `${commonMovies}genres=16`; 