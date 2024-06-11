import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from 'axios';
import MovieSkeleton from '../Skelton/MovieSkeleton';
import { Image } from '../../utils/URLs';
import { useSearch } from '../../Provider/SearchProvider';

function RowPost({ title, isSmall, url }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const { setStoredMovies } = useSearch();

    const fetchData = async () => {
        try {
            const res = await axios.get(`${url}`);
            const fetchedMovies = res.data.results ?? [];
            setMovies(fetchedMovies);
            setStoredMovies(prev => [...prev, ...fetchedMovies]);
            // console.log(fetchedMovies[0]);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data.', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return <MovieSkeleton isSmall={isSmall} count={7} />;
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="posters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={isSmall ? "smallPoster" : "poster"}
                        alt={movie.title}
                        src={`${Image}${movie.backdrop_path}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default RowPost;
