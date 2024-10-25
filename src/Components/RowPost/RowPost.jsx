import React, { useEffect, useState } from 'react';
import './RowPost.css';
import MovieSkeleton from '../../assets/Skelton/MovieSkeleton';
import { Image } from '../../utils/URLs';
import { useSearch } from '../../Contexts/SearchContext';
import axiosInstance from '../../utils/axios';

function RowPost({ title, isSmall, url }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const { setStoredMovies } = useSearch();

    const fetchData = async () => {
        try {
            const res = await axiosInstance.get(`${url}`);
            const fetchedMovies = res.data.results ?? [];
            setMovies(fetchedMovies);
            setStoredMovies(prev => [...prev, ...fetchedMovies]);
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

    const count = isSmall? 10 : 7;

    if (loading) {
        return <MovieSkeleton isSmall={isSmall} count={count} />;
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
