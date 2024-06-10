import React from 'react';
import "./NavBar.css";
import { FaSearch } from 'react-icons/fa';

function NavBar() {
    return (
        <div className="navbar">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#tv-shows">TV Shows</a>
                <a href="#movies">Movies</a>
                <a href="#news-popular">News & Popular</a>
                <a href="#my-list">My List</a>
                <a href="#browse-by-language">Browse by Language</a>
            </div>
            <FaSearch color='fff' className='search' /> 
            <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
        </div>
    );
}

export default NavBar;
