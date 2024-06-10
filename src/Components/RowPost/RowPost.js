// src/components/RowPost/RowPost.js
import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from 'axios';
import { api_key, baseURL, imageUrl } from '../../constants/constants';
import MovieSkeleton from '../../assets/MovieSkeleton';

function RowPost({title, isSmall}) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const res = await axios.get(`${baseURL}/discover/tv?api_key=${api_key}&with_networks=213`);
            setMovies(res.data.results);
            setLoading(false);
        } catch (error) {
            console.log('Error fetching data.');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <MovieSkeleton count={4} />;
    }


    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="posters">
                {movies.map((movie) => (
                    <img key={movie.id} className={isSmall?"smallPoster":"poster"} alt={movie.title} src={`${imageUrl}${movie.backdrop_path}`} />
                ))}
            </div>
        </div>
    );
}

export default RowPost;
