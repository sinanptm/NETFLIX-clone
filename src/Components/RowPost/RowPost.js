import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from 'axios';
import MovieSkeleton from '../Skelton/MovieSkeleton';
import { Image } from '../../constants/URLs';

function RowPost({ title, isSmall, url }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const res = await axios.get(`${url}`);
            setMovies(res.data.results);
            setLoading(false);
        } catch (error) {
            console.log('Error fetching data.');
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line 
    }, []);

    if (loading) {
        return <MovieSkeleton isSmall count={7} />;
    }


    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="posters">
                {movies.map((movie) => (
                    <img key={movie.id} className={isSmall ? "smallPoster" : "poster"} alt={movie.title} src={`${Image}${movie.backdrop_path}`} />
                ))}
            </div>
        </div>
    );
}

export default RowPost;
