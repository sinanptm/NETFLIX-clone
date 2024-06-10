import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from 'axios';
import { api_key, baseURL, imageUrl } from '../../constants/constants';

function RowPost() {
    console.log(api_key);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const res = await axios.get(`${baseURL}/discover/tv?api_key=${api_key}&with_networks=213`);
            setMovies(res.data.results);
            console.log(res.data.results);
            setLoading(false);
        } catch (error) {
            setError('Error fetching data.');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    // if (error) {
    //     return <div className="error">{error}</div>;
    // }

    return (
        <div className="row">
            <h2>Netflix Originals</h2>
            <div className="posters">
                {movies.map((movie) => (
                    <img key={movie.id} className="poster" alt={movie.title} src={`${imageUrl}${movie.backdrop_path}`} />
                ))}
            </div>
        </div>
    );
}

export default RowPost;
